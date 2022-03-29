import React from 'react';
import './Product.css';


//-----
export default function Product( {id,title,price,stars,img} ) {
 
  return (
    <div className='product'>
      
      <div className="product__info">
        <p>{title}</p>
        {price ? (<h4>Rs. {price}</h4>) : (<h4></h4>)}
        <p>{Array(stars).fill().map((random) => "⭐")}</p>
      </div>

      <img src={img} alt={title} />
      <button>Add to cart</button>
    </div>
  )
}
