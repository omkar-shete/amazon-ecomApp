import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from '../../Context/reducer';
import { UseStateValue } from '../../Context/StateProvider';
import './OrderSummaryBox.css'


//
export default function OrderSummaryBox() {
  
  const[{cart}, dispatch] = UseStateValue();

  //
  return (
    <div className='OrderSummaryBox'>
      {/* TOTAL PRICE & BTN ---- */}
      <CurrencyFormat
        thousandSeparator={true}
        prefix={"Rs. "}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}

        renderText={(value) => (
          <>
            <h2 className='OrderSummaryBox__subtotal'><u> Subtotal </u></h2>
            <p>({cart.length} items)</p>
            <h2 className='OrderSummaryBox__value'>{value}</h2>
          </>
        )}

      />

      <button>Proceed to Checkout</button>

    </div>
  )
}
