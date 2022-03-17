import React from 'react'
import { useFilterContext } from '../context/filter_context'
import{getUniqueValues,formatPrice} from '../utils/helpers'
import {FaCheck} from 'react-icons/fa'
const Filter=()=>{

  const {filters:{
    text,category,company,color,min_price,price,max_price,shipping},updateFilters,clearFilters,all_products} = useFilterContext()

  const categories = getUniqueValues(all_products,'category')
  const companies = getUniqueValues(all_products,'company')  
  const colors = getUniqueValues(all_products,'colors')  
  return(
    <>    
    <div className='mt-3'>
    <form onSubmit={(e)=>{e.preventDefault()}}>
        {/* search input */}
        <input type="text" name="text" placeholder='search your item' className='filter-input' value={text} onChange={updateFilters}/>
     
    <div className='filter-wrapper'>
      <div className="category-wrapper">
        <h3 className='title p-0 fs-5'>Categories</h3>
        {
          categories.map((c,index)=>{
            return <input type="button" key={index} className={`${category===c.toLowerCase()?'filter-active':null} category-btn`} value={c} name="category"
            onClick={updateFilters}
            />
          })
        }
      </div>

      <div className="company-wrapper mt-2">
        <h3 className='title p-0 fs-5'>Companies</h3>
        <select name="company" value={company} onChange={updateFilters} className="company mt-2">
          {
            companies.map((c,index)=>{
              return <option key={index} value={c}>{c}</option>
            })
          }
        </select>
      </div>

      <div className="color-wrapper mt-3">
        <h3 className='title p-0 fs-5'>Colors</h3>
        {
           colors.map((c,index)=>{
             if(c==='all'){
              return <button className='all-btn' name="color" 
              key={index}
              data-color='all'
              onClick={updateFilters}
              >All</button>
             }
            return <button className='btn color-btn p-1' name="color" 
            key={index} style={{background:c}}
            data-color={c}
            onClick={updateFilters}
            >{
              color===c?<FaCheck style={{marginTop:'-12px',color:'#fff'}} />:null
            }</button>
           })
         }
      </div>

      <div className="price-wrapper mt-2">
        <h3 className='title p-0 fs-5'>Price</h3>
         <p>{formatPrice(price)}</p>
         <input type="range" name="price" onChange={updateFilters} className="range" 
         min={min_price} 
         max={max_price}
         value={price}
         />
      </div>

      <div className='shipping-wrapper mt-2'>
        <label className='title p-0 fs-5'>Free Shipping</label>
         <input type="checkbox" name="shipping" id="shipping" className='check-box' 
         onChange={updateFilters} checked={shipping} />
      </div>
    </div>
    </form>
    <button type="submit" className='cart-btn2 mt-5 w-100' onClick={clearFilters}>Reset Filter</button>
    </div>
  </>
  )
}
export default Filter