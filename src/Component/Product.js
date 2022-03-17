import React from 'react'
import { Link } from 'react-router-dom'
import {formatPrice} from '../utils/helpers'
const Product=({image,name,price,id})=>{
  return(
    <div className="col-lg-4 col-md-6 p-1">
      <div className="card">
        <img src={image} className="card-img-top image-gallery" alt="product-avatar" />
        {/* <div className="position-absolute top-0 end-0 text-capitalize favourite-icon"><AddtoFavourite /></div> */}
        <div className="card-body">
          <div className="position-relative p-4">
            <div className="position-absolute top-0 start-0 text-capitalize fw-bolder" style={{fontSize:'15px'}}>{name}</div>
            <div className="position-absolute top-0 start-0 text-capitalize mt-4"><pre>{formatPrice(price)}</pre></div>
            <div className="position-absolute top-0 end-0 mt-2">
              <Link to={`/products/${id}`}><input type="submit" className='buy-custom-btn' value='Buy Now'/></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Product