import React from 'react';
import CartButton from './CartButton'
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/user_context';
const Navbar=()=>{
  
  const{myUser}=useUserContext()
  return(
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
  <div className="container">
    <a className="navbar-brand" style={{color:'#CC7442'}}>HB</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to='/' className="nav-link" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/products' className="nav-link">Products</Link>
        </li>        
        <CartButton />  
       
          {
            myUser &&  <li className="nav-item mt-1 m-1"><Link to="/checkout" className='auth-btn'>Checkout</Link></li> 
          }
              
        <li className="nav-item">
          <Link to='/about' className="nav-link">About</Link>
        </li>
      </ul>     
    </div>
  </div>
</nav>
  )
}
export default Navbar;