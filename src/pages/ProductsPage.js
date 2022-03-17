import React from 'react'
import { FaFilter } from "react-icons/fa";
import {PageHero,Filter,Sort,ProductList} from '../Component'
const ProductsPage = () => {
  return (
    <div className="container product-list-wrapper">
      <PageHero title={'Products'}/>
      <div className="row">
      <button type="button" class="filter-btn" data-toggle="modal" data-target="#exampleModal">
            <p className='fw-bolder mt-4'><FaFilter /> Filter</p>
          </button>
        <div className="col-lg-2 dv-filter">
          <Filter />
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Filters</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <Filter />
                </div>
              </div>
            </div>
          </div>
        <div className="col-lg-10">
          <Sort />
          <ProductList />
        </div>
      </div>      
    </div>
  )
}

export default ProductsPage
