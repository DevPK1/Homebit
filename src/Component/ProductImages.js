import React, { useState } from 'react'
const ProductImages=({images=[{url:''}]})=>{

  const [main,setMain] = useState(images[0])
  return(
    <div>
      <img src={main.url} alt="gallery IMG" className='gallery-image' />
        <div class="container-fluid">
          <div class="row row-cols-5 row-cols-lg-5 g-2 g-lg-1">
            {
              images.map((image,index)=>{
                return<div class="col" key={index}>
                        <div class="p-2">
                          <img src={image.url} alt={image.filename}
                          onClick={()=>setMain(images[index])}
                          className={`${image.url===main.url ? 'image-active':null} gallery-list`} 
                          />
                          
                        </div>
                      </div>
              })
            }
          </div>
        </div>
    </div>
  )
}
export default ProductImages