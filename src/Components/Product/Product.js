import React from 'react';
import { UseStateValue } from '../../Context/StateProvider';
import './Product.css';


//-----
export default function Product( {id,title,price,stars,img} ) {

  //data store called
  const[{cart}, dispatch] = UseStateValue();
  

  //add to cart
  const addToCart = () => {
    //dispatching actiontype & the item thr an obj
    dispatch({
      type: "ADD_TO_CART",
      item:{
        id:id,
        title:title,
        price:price,
        stars:stars,
        img:img,
      }
    });
  }


  //----------------------return---------------
  return (
    <div className='product'>
      
      <div className="product__info">
        <p>{title}</p>
        {price ? (<h4>Rs. {price}</h4>) : (<p></p>)}
        <p>{Array(stars).fill().map((random) => "⭐")}</p>
      </div>

      <img src={img} alt={title} />
      <button onClick={addToCart}>Add to cart</button>
    </div>
  )
}
