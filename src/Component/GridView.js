import React from 'react'
import Product from './Product'
const GridView=({products})=>{
  return(
    <div className="row grid-product-wrapper">
      {
        products.map((product)=>{
          return <Product key={product.id} {...product} />
        })
      }
    </div>
  )
}
export default GridView