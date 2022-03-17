import React from 'react'
const CartColumn=()=>{
  return (
    <div className="content-wrapper">
      <div class="container">
          <div class="row row-cols-5 row-cols-lg-5 g-2 g-lg-3">
            <div class="col">
              <div>Item</div>
            </div>
            <div class="col">
              <div>Price</div>
            </div>
            <div class="col">
              <div>Quantity</div>
            </div>
            <div class="col">
              <div>Subtotal</div>
            </div>
          </div>
        </div>
    </div>
  )
}
export default CartColumn