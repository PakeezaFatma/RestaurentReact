import classes from './MealItemForm.module.css';
import classes1 from '../../UI/Input.module.css';
import { useContext, useState } from 'react';
import CartContext from '../../../store/cart-context';

const MealItemForm =(props)=>{
const [amount,setAmount] =useState(1);

const changeHandler=(e)=>{
   setAmount(e.target.value);
}



const ctx=useContext(CartContext);
const setData=(a,c)=>{

    const obj={
        id:a,
        tittle:a,
       
        price:c,
        amount:amount
    }
    ctx.addItem(obj);
    // console.log(obj)
}

 return<form className={classes.form}> 
 <div className={classes1.input}>
    
        <label >Amount</label>
        <input type='number'value={amount} onChange={changeHandler} min={0} max={5}></input>

    
 
 </div>
    <button type='button' onClick={setData.bind(null,props.name,props.pr)} >+ Add</button>
 </form>
};
export default MealItemForm;


{/* <Input label="Amount" input={{
        id:'amount',
        type:'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1'
    }}/> */}
