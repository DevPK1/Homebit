import React from 'react'
import { formatPrice } from '../utils/helpers'
import AddtoFavourite from './AddtoFavourite'
import { Link } from 'react-router-dom'
const ListView=({products})=>{
  return(
    <div className="row listview-wrapper">
      {
        products.map((product)=>{
          const{id,image,name,price,description} = product;
          return(
            <>
              <div class="container" key={id}>
                <div class="row row-cols-2 row-cols-lg-2 g-2 g-lg-3 m-1 list">
                  <div class="col-lg-4 col-md-4 p-1">
                    <div class="list-image"><img src={image} className='img-fluid list-image' alt='list-IMG' /></div>
                  </div>
                  <div class="col-lg-8 col-md-8 list-content">
                  <div className="position-absolute top-0 end-0 text-capitalize favourite-icon"><AddtoFavourite /></div>
                    <div class="list-text">
                      <p className='list-title'>{name}</p>
                      <p className='text-success list-price'>{formatPrice(price)}</p>
                      <p className='list-description'>{description.substring(0,150)}...</p>
                      <Link to={`/products/${id}`}><input type="submit" className='buy-custom-btn' value='Buy Now'/></Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })
      }
    </div>
  )
}
export default ListView