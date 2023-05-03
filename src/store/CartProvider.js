import { useState } from "react";
import CartContext from "./cart-context";


const CartProvider =props=>{
    const [items,setItems]=useState([]);
    
    const addItemToCartHandler =item=>{
        
        console.log(items);
        setItems([...items,item]);
        
    };

    const removeItemFromCartHandler =id=>{}
    const cartContext ={
        Items:items,
        totalAmount:0,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    };
return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

};
export default CartProvider;