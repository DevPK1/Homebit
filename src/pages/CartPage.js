import React from 'react'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import {CartContent,PageHero} from '../Component'
const CartPage = () => {
  const {cart} = useCartContext();

  if(cart.length<1){
    return(
       <div className='container'>
         <div className='row cart-empty-wrapper'>
        <div className="col">
        <p className='title'>Your Cart Is Empty.</p>
        <Link to="/products" className='cart-btn'>Shop Now</Link>
        </div>
      </div>
       </div>  
    )
  }

  return <div className="container cart-wrapper">
    <PageHero title="Cart" />
    <div className="card-content">
      <CartContent />
    </div>
  </div>
}

export default CartPage
