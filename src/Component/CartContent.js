import React from 'react'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import  CartItem  from './CartItem'
import CartTotals from './CartTotals'
const CartContent=()=>{

  const {cart,clearCart} = useCartContext();
 
  return(
    <div className ='cart-content-wrapper'>
      <div className="row">
        <div className="col-lg-9">
       
          {
            cart.map((item)=>{
              return <CartItem key={item.id} {...item} />
            })
          }
          <div className='mt-5'>
            <Link to="/products" className='cart-btn2 m-4'> Continue Shopping</Link>
            <button className='cart-btn empty-btn' onClick={()=>clearCart()}>Empty cart</button>
          </div>
          
        </div>
        <div className="col-lg-3 bg-light">
        <CartTotals />
        </div>
      </div>
    </div>
  )
}
export default CartContent