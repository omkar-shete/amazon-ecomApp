import React from 'react';
import { UseStateValue } from '../../Context/StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';



//
export default function CheckoutPage() {

  //data store
  const[{cart}, dispatch] = UseStateValue();


  //---------------------return------------------
  return (
    <div className='checkout'>

      {/* LIST OF ITEMS---- */}
      <div className="checkout__left">
        {cart.length===0 ? (
          <div>
            <h2>Your shopping cart is empty</h2>
            <p>Click "Add to cart" button to buy items.</p>
          </div>
          ):(
          <div>
            <h2>Your shopping cart</h2>
            {/* list of products  */}
            {cart.map(cartItem=>(
              <CheckoutProduct
                id={cartItem.id}
                title={cartItem.title}
                price={cartItem.price}
                stars={cartItem.stars}
                img={cartItem.img}
                key={cartItem.id}
              />
            ))}
          </div>
          )}
      </div>

      {/* CART DETAILS ----- */}
      <div className="checkout__right"></div>
      
    </div>
  )
}
