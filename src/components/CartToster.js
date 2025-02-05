import React, { useContext } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import CartContext from '../store/cart-context';

const CartToast = () => {
    const cartCtx=useContext(CartContext);
  return (
    <ToastContainer position="bottom-end" className="p-3" style={{
        position: "fixed", // Fix the toaster to the viewport
        bottom: "20px", // Distance from the bottom
        right: "20px", // Distance from the right
        zIndex: 1050, // Ensure it appears above other content
      }} stack={'true'}>
    {cartCtx.toasts.map((toast) => (
      <Toast
        key={toast.id}
        show={true}
        onClose={() => cartCtx.removeToast(toast.id)}
        delay={3000}
        autohide
        bg="info"
          
      >
        <Toast.Body className="text-white fw-semibold">
          Your product {toast.title}: is added to the cart
        </Toast.Body>
      </Toast>
    ))}
  </ToastContainer>
  );
};

export default CartToast;
