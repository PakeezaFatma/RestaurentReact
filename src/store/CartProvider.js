import { useState } from "react";
import CartContext from "./cart-context";


const CartProvider =props=>{
    const [items,setItems]=useState([]);
    
    const addItemToCartHandler =item=>{
       const existingItem= items.find((e)=>e.tittle ===  item.tittle)
      
    const IndexFind=items.findIndex((t)=>t.tittle === item.tittle);
    if(existingItem)
    {
        existingItem.amount = existingItem.amount + Number(item.amount);
        items[IndexFind] = existingItem;
        setItems([...items])
        // console.log(items);
    }
   
       else 
       {
        setItems([...items,item]);
       }
        
    };

    const removeItemFromCartHandler =id=>{
        const dltItem =items.find((e)=>e.id === id);
        const dltIndex =items.findIndex((e)=>e.id === id);
        if(dltItem.amount >1)
        {
            dltItem.amount--;
            items[dltIndex]=dltItem;
            setItems([...items]);

        }
       else {
        const remainingItem= items.filter((e)=>e.id !== id);
        setItems([...remainingItem]);
       }
        
    }
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
