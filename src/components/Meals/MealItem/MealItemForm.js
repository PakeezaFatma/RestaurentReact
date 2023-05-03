import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const MealItemForm =(props)=>{

const ctx=useContext(CartContext);
const setData=(a,b,c)=>{
    const obj={
        tittle:a,
        desp:b,
        price:c
    }
    ctx.addItem(obj);
    console.log(obj)
}
 return <form className={classes.form}>

    <Input label="Amount" input={{
        id:'amount',
        type:'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1'
    }}/>
    
    <button type='button' onClick={setData.bind(null,props.name,props.desp,props.pr)} >+ Add</button>
 </form>
};
export default MealItemForm;
