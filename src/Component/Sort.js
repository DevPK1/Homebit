import React from 'react'
import { useFilterContext } from '../context/filter_context'
import { BsFillGridFill,BsList } from "react-icons/bs";

const Sort=()=>{

  const{filtered_products:products,grid_view,setGridView,setListView,sort,updateSort} = useFilterContext();
  return(
    <div className="row sort-wrapper p-2">
     <div className="row-cols-1 row-cols-lg-5 g-2 g-lg-3">
      <div className="col-lg-12">
        <BsFillGridFill onClick={setGridView} className={`${grid_view?'active':null} fs-3 grid-fill`}/>&nbsp;&nbsp;
        <BsList onClick={setListView} className={`${!grid_view?'active':null} fs-3 grid-list`}/>
      <div className="sortby">
      <form>
       <label htmlFor="sort"> Sort By </label>&nbsp;
        <select name="sort" id="sort" className='sort-item'
        value={sort}
        onChange={updateSort}
        >
          <option value="price-lowest"> Price ( Lowest )</option>
          <option value="price-highest"> Price ( highest )</option>
          <option value="name-a">name ( a - z )</option>
          <option value="name-z">name ( z - a )</option>
        </select>
       </form>
      </div>
      </div>
     </div>
     <span className='fw-bolder'>{products.length} products found.</span>
    </div>
  )
}
export default Sort