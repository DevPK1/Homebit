import React from 'react'
import {services} from '../utils/constants'
const Services=()=>{
  return(
    <>
      {
        services.map((service)=>{
          const {id,icon,text,title}= service;
          return (
            <div className="col-lg-4 text-center mt-5 p-5 bg-light" key={id}>
              <p className='fs-1 icon'>{icon}</p>
              <p className='service-title'>{title}</p>
              <p className='service-text'>{text}</p>
            </div>
          )
          
        })
      }
    </>
  )
}
export default Services