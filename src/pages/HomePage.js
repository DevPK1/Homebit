import React from 'react'
import { Link } from 'react-router-dom';
import HeroBG from '../assests/hero-bg.jpg'
import { FaChevronRight } from "react-icons/fa";
import FeaturedProducts from '../Component/FeaturedProducts';
import Services from '../Component/Services'

const HomePage = () => {
  return (
    <>
    <div className="container home-wrapper">
      <div className="row">
            <div className="col-lg-6">
              <img src={HeroBG} alt="header img" className='img-fluid' />
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-4" style={{background: '#E3E3EB',paddingBottom:'40px'}}>
              <section className='header-wrapper'>
                <h1>Luxury furniture  handmade  in  Italy.</h1>
                <p>The stylish interior makes us want to spend more time in it. We present interesting sets
                   to create an apartment. We choose the right colors according to our own state.
                </p>
              </section>
              <Link to='/products'><input type="submit" className='custom-btn' value={`Shop Now`}/></Link>
            </div>
      </div>
      <div className="product-wrapper text-title">
          <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <div className="col bg-light">
              <div className="p-3 border-end">
                <p className='brand-title'>200+<br /> Branded Products</p>
              </div>
            </div>
            <div className="col bg-light">
              <div className="p-3 mt-3">
              <p className='brand-title'>Semen's <span>International</span></p>
              </div>
            </div>
            <div className="col bg-light">
              <div className="p-3 mt-3">
              <p className='brand-title'>Kronheim's</p>
              </div>
            </div>
            <div className="col bg-light">
              <div className="p-3 mt-3">
              <p className='brand-title'>Bassett</p>
              </div>
            </div>
            <div className="col bg-light">
              <div className="p-3 mt-3">
              <p className='brand-title'>Ikea</p>
              </div>
            </div>
          </div>
      </div>
      <div className="category-wrapper">
        <div className="row">
          <div className="col-lg-5 border-end text-center">        
          <div>
            <h1>Featured</h1>
            <p style={{marginTop:'-30px'}}>Products <FaChevronRight className='fs-6'/></p>
          </div>
          </div>
          <div className="col-lg-7">
            <p>Each room of our home speaks volumes about us, makes our tastes visible and conveys our style through 
              the choices we make with regards to furnishing.
            </p>
          </div>
        </div> 
        <FeaturedProducts className="mt-5"/>  
        {/* <p className='ms-auto'>Explore More</p>      */}
        <div className='product-link'>
              <p><Link to='/products' style={{textDecoration:'none',color:'#252525'}}>Explore More</Link>
              <FaChevronRight className='fs-6'/></p>
        </div>
      </div>

      <div className="service-wrapper">
        <div className="row">
          <div className="col-lg-5 border-end text-center">        
          <div>
            <h1>Services</h1>
          </div>
          </div>
          <div className="col-lg-7">
            <p>Home Bits thinks about their customers. It try to provide all the types 
              of services to their customer to create valuable relationship.
            </p>
          </div>
        </div>       
      </div>
      <div className="row">
          <Services />
      </div>
     <div className="container mt-5">
     <h1 className='title text-center'>Join our newsletter and get 20% off.</h1>
     <div className='row mt-5'>      
        <div className="col-lg-6 newsletter border-end">
          <h1>Black Friday Offer</h1>
          <p>Each room of our home speaks volumes about us, makes our tastes visible and conveys our
             style through the choices we make with regards to furnishing.</p>
        </div>
        <div className="col-lg-6 text-center mt-4">
          <input type="text" placeholder='email id' className='newsletter-form'/>
          <input type="submit" className='custom-buttom' value="suscribe now" />
        </div>
      </div>
     </div>
    </div>
    </>
  )
}

export default HomePage
