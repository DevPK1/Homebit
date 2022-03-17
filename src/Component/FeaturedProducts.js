import React from 'react'
import {useProductsContext} from '../context/products_context'
import Loading from './Loading'
import Error from './Error'
import Product from './Product'
const FeaturedProducts=()=>{

  const{products_loading:loading,products_error:error,featured_products:featured} = useProductsContext();

  if(loading){
    return <Loading />
  }

  if(error){
    return <Error />
  }
  return(
    <div className='row' style={{marginTop:'100px'}}>
      {
        featured.slice(0,3).map((product)=>{
          return <Product key={product.id} {...product}/>
        })
      }
    </div>
  )
}
export default FeaturedProducts;