import React from 'react'

const Footer=()=>{
  return(
    <div className="container-fluid bg-light footer">
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 text-center">
        <div className="col">
          <div className="p-3 mt-4">Company</div>
        </div>
        <div className="col">
          <div className="p-3 mt-4">Media Center</div>
        </div>
        <div className="col">
          <div className="p-3 mt-4">Privacy & Legal</div>
        </div>
        <div className="col">
          <div className="p-3 mt-4">Contact</div>
        </div>
        <div className="col">
          <div className="p-3 mt-4">
          
          </div>
        </div>
      </div>
        <p className='footer-text'>
          Prices on this website are for online purchases only. Prices in-store may differ.
        </p>
        <pre className='text-center'>Build & Design by Pradeep Gautam</pre>
    </div>
  )
}
export default Footer