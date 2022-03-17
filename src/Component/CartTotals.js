import React from 'react'
import { useCartContext } from '../context/cart_context'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
import { useUserContext } from '../context/user_context'
const CartTotals=()=>{

  const {total_amount,shipping_fee} = useCartContext();
  const {myUser,loginWithRedirect} = useUserContext();
  return(
    <div className="cart-total-wrapper mt-5 bg-light">
      <h6>Sub total : <span>{formatPrice(total_amount)}</span></h6>
      <h6>
        Shipping fee : <span>{formatPrice(shipping_fee)}</span> 
      </h6>
      <hr />
      <h5>
        Order total : <span>{formatPrice(total_amount+shipping_fee)}</span>
      </h5><br />
      {
        myUser?<Link to ="/checkout" className='cart-btn'>proceed to checkout</Link>:
        <button className='cart-btn2' onClick={loginWithRedirect}>Login To Checkout</button>
      }
    </div>
  )
}
export default CartTotals