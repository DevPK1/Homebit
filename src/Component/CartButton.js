import React from 'react'
import {FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'

const CartButton = () => {
  const {total_items} = useCartContext();
  const{loginWithRedirect,myUser,logout}=useUserContext()

  return <>
  <li className='nav-item'>
  <Link to='/cart' className='nav-link'>Cart <span className='text-danger'>{total_items}</span></Link>
  </li>
  <li className="nav-item">
    {myUser?<button type="button" className='auth-btn' onClick={()=>logout({returnTo:window.location.origin})}>
    logout <FaUserMinus />
  </button>:<button type="button" className='auth-btn' onClick={loginWithRedirect}>
    login <FaUserPlus />
  </button>}
  
  
  </li>
  </>
}

export default CartButton
