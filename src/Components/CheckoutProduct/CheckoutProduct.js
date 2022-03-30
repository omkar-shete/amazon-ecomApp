import React from 'react';
import { UseStateValue } from '../../Context/StateProvider';
import "./CheckoutProduct.css";


//
export default function CheckoutProduct({id,title,price,stars,img}) {

  //store
  const[{cart}, dispatch] = UseStateValue();

  const removeFromCart = () => {
    //dispatching actiontype & id of the item 
    dispatch({
      type:"REMOVE_FROM_CART",
      id:id,
    });
  }
  
  //----------return--------------
  return (
    <div className='CheckoutProduct'>

      <img 
        className='CheckoutProduct__img' 
        src={img} 
        alt="CheckoutProduct" />
      
      <div className="CheckoutProduct__info">
        <p>{title}</p>
        <h4>Rs. {price}</h4>
        <p>{Array(stars).fill().map((random) => "⭐")}</p>
        <button onClick={removeFromCart}>Remove from cart</button>

      </div>

    </div>
  )
}
