import React from 'react'
import { formatPrice } from '../utils/helpers'
import AmountButtons from './AmountButtons'
import { useCartContext } from '../context/cart_context'
const CartItem=({id,image,name,color,price,amount})=>{
  const{removeItem,toggleAmount} = useCartContext()
  const increase=()=>{
    toggleAmount(id,'inc')
  }
  const decrease=()=>{
    toggleAmount(id,'dec')
  }
  return(
    <div className="cart-item-wrapper">
      <div className="row p-2 item-card mt-4 position-relative">
        <div className="col-lg-3">
          <img src={image} alt="product-img" className='item-image' />
        </div>
        <div className="col-lg-6 position-relative p-3" style={{lineHeight:'14px'}}>
          <p className='item-title'>{name}</p>
          <p className='fw-bolder text-success'>Price : {formatPrice(price)}</p>
          <div className='fw-bolder'>Color: <div className='item-color' style={{background:color}}></div></div>
          <div className='item-amount'>
             <AmountButtons increase={increase} decrease={decrease} amount={amount}/>
          </div>
          <p className='position-absolute top-0 end-0 item-title mt-4'><span>Subtotal : </span> <span>{formatPrice(price * amount)}</span></p>
          <div className="position-absolute bottom-0 end-0">
            <button type="button" className='item-button' onClick={()=>removeItem(id)}>Remove Item</button>
          </div>
        </div>
      </div>   
    </div>
  )
}
export default CartItem