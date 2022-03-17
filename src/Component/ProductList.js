import React from 'react'
import { useFilterContext } from '../context/filter_context'
import ListView from './ListView'
import GridView from './GridView'

const ProductList=()=>{

  const{filtered_products:products,grid_view} = useFilterContext();
  if(products.length<1){
    return(
      <p className='mt-5 title'>Sorry, No product found...</p>
    )
  }

  if(grid_view===false){
    return <ListView products={products} />
  }
  return(
    <div className='grid view'>
      <GridView products={products} />
    </div>
  )
}
export default ProductList