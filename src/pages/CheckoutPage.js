import React from 'react'
import styled from 'styled-components'
import  PageHero from '../Component/PageHero'
import StripeCheckout from '../Component/StripeCheckout'
// extra imports

import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  const { cart } = useCartContext()

  return (
    <div className='container checkout-wrapper'>
      <PageHero title='checkout' />
      <Wrapper className='page' style={{marginTop:'100px'}}>
        {cart.length < 1 ? (
          <div className='empty mt-5'>
            <h2>Your cart is empty</h2><br />
            <Link to='/products' className='cart-btn2'>
              fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
          
        )}
      </Wrapper>
    </div>
  )
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`
export default CheckoutPage