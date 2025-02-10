import React, { useState, useEffect } from 'react';
import CartContext from './cart-context';

function CartProvider(props) {
    const [toasts, setToasts] = useState([]);
    const [totalItems, setTotalItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const userData = JSON.parse(localStorage.getItem('ecom-user'));

    // Normalize the email ID (remove '@' and '.')
    const normalizeEmail = (email) => {
        return email.replace(/[@.]/g, '');
    };

    const userEmail = userData ? normalizeEmail(userData.email) : null;
    const crudApi = `https://crudcrud.com/api/c67fead88cb5491fb72460d3f54948f7/cart_${userEmail}`; // Unique endpoint for each user

    // Fetch cart items from the API on component mount
    useEffect(() => {
        if (!userEmail) return; // Skip if user is not logged in

        const fetchCartItems = async () => {
            try {
                const response = await fetch(crudApi,{
                    
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          method: "GET",
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch cart items');
                }
                const data = await response.json();
                setTotalItems(data);
                // Calculate total amount
                const amount = data.reduce((sum, item) => sum + item.price, 0);
                setTotalAmount(amount);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, [crudApi, userEmail]);

    // Add item to cart using CRUD API
    const AddItemHandler = async (item) => {
        if (!userEmail) {
            alert('Please log in to add items to the cart');
            return;
        }

        if (totalItems.find(ele => ele.id === item.id)) {
            alert('Item already added');
            return;
        }

        try {
            // Add item to the API
            const response = await fetch(crudApi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),
            });

            if (!response.ok) {
                throw new Error('Failed to add item to cart');
            }

            const newItem = await response.json();

            // Update local state
            setTotalAmount(prevAmount => prevAmount + newItem.price);
            setTotalItems(prevState => [...prevState, newItem]);

            // Add toast
            const toastObj = {
                title: newItem.title,
                id: newItem.id,
            };
            setToasts(prevState => [...prevState, toastObj]);
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    // Remove item from cart using CRUD API
    const removeItemHandler = async (item) => {
        try {
            // Delete item from the API
            const response = await fetch(`${crudApi}/${item._id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to remove item from cart');
            }

            // Update local state
            setTotalAmount(prev => prev - item.price);
            setTotalItems(prevState => prevState.filter(ele => ele._id !== item._id));
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    // Remove toast
    const removeToastsHandler = (id) => {
        setToasts(prevState => prevState.filter(item => item.id !== id));
    };

    // Clear cart using CRUD API
    const clearCart = async () => {
        try {
            // Delete all items from the API
            const responses = await Promise.all(
                totalItems.map(item =>
                    fetch(`${crudApi}/${item._id}`, {
                        method: 'DELETE',
                    })
                )
            );

            const allSuccessful = responses.every(response => response.ok);
            if (!allSuccessful) {
                throw new Error('Failed to clear cart');
            }

            // Update local state
            setTotalAmount(0);
            setTotalItems([]);
            setToasts([]);
        } catch (error) {
            console.error('Error clearing cart:', error);
        }
    };

    const initialValues = {
        toasts: toasts,
        items: totalItems,
        totalAmount: totalAmount,
        addItems: AddItemHandler,
        removeItem: removeItemHandler,
        removeToast: removeToastsHandler,
        clearCart: clearCart,
    };

    return (
        <CartContext.Provider value={initialValues}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;