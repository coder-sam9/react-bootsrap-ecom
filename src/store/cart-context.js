import { createContext } from "react";

const CartContext=createContext({
    toasts:[],
    items:[],
    totalAmount:0,
    addItems:()=>{},
    removeItem:()=>{},
    removeToast:()=>{},
    clearCart:()=>{},
});
export default CartContext;