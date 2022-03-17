import React from 'react';
import { Link } from 'react-router-dom';
const PageHero=({title,product})=>{
  return(
      <div className='hero-wrapper'>
        <p>
        <Link to='/' className='hero-link'> Home </Link> 
        {
          product && <Link to='/products' className='hero-link'> {'>'} Products </Link>
        }
        <span className='text-capitalize'>{'>'} {title}</span>
        </p>
      </div>
  )
}
export default PageHero