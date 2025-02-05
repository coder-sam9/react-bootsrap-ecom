import React, { useState } from 'react'
import CartContext from './cart-context'

function CartProvider(props) {
    const [toasts,setToasts]=useState([]);
    const [totalItems,setTotalItems]=useState([]);
    const [totalAmount,setTotalAmount]=useState(0);
    const AddItemHandler=(item)=>{
        if (totalItems.find(ele=>ele.id===item.id)) {
            alert('Item already added');
            return;
        }
        item.id=Math.random()*Math.random().toFixed(4)*1000
        setTotalAmount(prevAmount=>prevAmount+item.price);
        setTotalItems(prevState=>{
            return [...prevState,item];
        });
        const toastObj={
            title:item.title,
            id:item.id,
        }
        setToasts(prevState=>{
            return [...prevState,toastObj]
        })
        console.table(totalItems);
    };
    const removeItemHandler=item=>{
        setTotalAmount(prev=>prev-item.price);
        setTotalItems(prevState=>{
            return prevState.filter(ele=>ele.id!==item.id);
        })
    };
    const removeToastsHandler=id=>{
        setToasts(prevState=>{
            return prevState.filter(item=>item.id!==id)
        })
    }
    const initialValues={
        toasts:toasts,
        items:totalItems,
        totalAmount:totalAmount,
        addItems:AddItemHandler,
        removeItem:removeItemHandler,
        removeToast:removeToastsHandler,
        clearCart:()=>{setTotalAmount(0);setTotalItems([]);setToasts([])}

    };
  return (
    <CartContext.Provider value={initialValues}>
{props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;