import React, { useEffect } from 'react'
import {useParams,useHistory} from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import {formatPrice} from '../utils/helpers'
import {Loading,Error,Stars,AddToCart,ProductImages,PageHero,AddToFavourite} from '../Component'
const SingleProductPage = () => {
  const {id} = useParams();
  const history = useHistory();
  const {single_product_loading:loading,single_product_error:error,single_product:product,fetchSingleProduct}
   = useProductsContext();
  
  useEffect(()=>{
    fetchSingleProduct(`${url}${id}`);
  },[id]) 
  
  useEffect(()=>{
    if(error){
      setTimeout(()=>{
        history.push('/')
      },3000)
    }
  },[error])

  if(loading){
    return <Loading />
  }

  if(error){
    return <Error />
  }

  const {name,price,description,stock,stars,reviews,id:sku,company,images} = product
  return (
    <div className="container single-product-wrapper">
     <PageHero title={name} product={product} />
      <div className="row mt-5">
        <div className="col-lg-6">
          <ProductImages images={images}/>
        </div>
        <div className="col-lg-6 p-4">
          <p className='single-fav-icon'><AddToFavourite /></p>
          <p className='product-title'>{name}</p>
          <Stars stars={stars} reviews={reviews}/>
          <p className='text-success'>{formatPrice(price)}</p>
          <p className='product-description'>{description}.</p>
          <p className='stock'>
            <span className='fw-bolder'>Available : </span>
            <span>
              {
                stock>0?`${stock}`:'Out Of Stock'
              }
            </span>
          </p>
          <p className='sku'>
            <span className='fw-bolder'>SKU : </span>
            <span>{sku}</span>
          </p>
          <p className='brand'>
            <span className='fw-bolder'>Brand : </span>
            <span>{company}</span>
          </p>
          <hr />
          <p>
            {
              stock>0 && <AddToCart product={product} />
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export default SingleProductPage
