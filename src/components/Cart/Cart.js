import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItems";

const Cart = (props) => {
  // const cartItems = (
  //   <ul className={classes["cart-items"]}>
  //     {[{ id: "c1", name: "Sushi", amount: "2", price: 12.93 }].map((item) => 
  //     (
  //       <li>{item.name}</li>
  //     ))}
  //   </ul>
  // );
  
  const ctx =useContext(CartContext );
  let fetchAmount=0;
  ctx.Items.forEach((e)=>{
    fetchAmount+=e.amount*e.price;

  })
  // const cartItem =<ul className={classes['cart-items']}><{ctx.items.map((items)=>(<CartItem key={items.id} name={items.name} amount={items.amount} price ={items.price} onRemove={cartItemRemoveHandler.bind(null,items.id)}) >
  //   )}/>
  //   </ul>

  const cartItemRemoveHandler=id=>{
    ctx.removeItem(id);
  }
 const cartItemAddHandler=(id,tittle,price)=>{
    const obj={
      id:id,
      tittle:tittle,
      price:price,
      amount:1
    }
ctx.addItem(obj);
    
 }
  const cartItem =<ul className={classes['cart-items']} >
    {ctx.Items.map((items)=>(<CartItem key={items.id} name={items.tittle} amount={items.amount} price ={items.price} onAdd={cartItemAddHandler.bind(null,items.id,items.tittle,items.price)} onRemove={cartItemRemoveHandler.bind(null,items.id) }
     />))}
  </ul>
  return (
    <Modal onClose={props.onClose}>
      {
        // ctx.Items.map((e)=>{
        //   return <ul className={classes["cart-items"]}>
        //     <li>{e.tittle}</li>
        //     <li>{e.desp}</li>
        //     <li>{e.price}</li>
        //     <li>{e.amount}</li>
        //   </ul>
        // })
        cartItem
      }
      
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{fetchAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;


