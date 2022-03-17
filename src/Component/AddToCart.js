import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import { AmountButtons } from '.'

const AddToCart=({product})=>{

  const{addToCart} = useCartContext()

  const {id,stock,colors}=product;
  const [mainColor,setMainColor] = useState(colors[0]);
  const [amount,setAmount] = useState(1);

  const increase=()=>{
    setAmount((oldAmount)=>{
      let tempAmount = oldAmount + 1
      if(tempAmount>stock){
        tempAmount = stock
      }
      return tempAmount
    })
  }

  const decrease=()=>{
    setAmount((oldAmount)=>{
      let tempAmount = oldAmount - 1
      if(tempAmount<1){
        tempAmount = 1
      }
      return tempAmount
    })
  }

  return(
   <div className="color">
     <span className='fw-bolder'>Color : </span>
     <span>
         {
           colors.map((color,index)=>{
            return <button type="button" className='btn color-btn p-1' key={index} style={{background:color}}
            onClick={()=>setMainColor(color)}
            >
              {mainColor === color? < FaCheck style={{marginTop:'-12px',color:'#fff'}}/>: null}
            </button>
           })
         }
       </span>
    

  <div className='p-2 m-1'>
     <AmountButtons amount={amount} increase={increase} decrease={decrease}/><br />
  </div>     
  <Link to="/cart" className='cart-btn' style={{float:'right'}}
  onClick={()=>addToCart(id,mainColor,amount,product)}
  >Add to cart</Link>
   </div>
  )
}
export default AddToCart