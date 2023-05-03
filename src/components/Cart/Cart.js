import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
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
  
  return (
    <Modal onClose={props.onClose}>
      {
        ctx.Items.map((e)=>{
          return <ul className={classes["cart-items"]}>
            <li>{e.tittle}</li>
            <li>{e.desp}</li>
            <li>{e.price}</li>
          </ul>
        })
      }
      
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;


