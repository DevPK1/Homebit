import React from 'react'
import { FaMinus,FaPlus } from 'react-icons/fa'
const AmountButtons=({amount,increase,decrease})=>{
  return(
    <div className="mt-5">
      <span className='fw-bolder' style={{marginLeft:'-12px'}}>Quantity : </span>
      <span className='p-2 minus' onClick={decrease}><FaMinus /></span>
      <span className='amount'>{amount}</span>
      <span className='p-2 plus' onClick={increase}><FaPlus /></span>
    </div>
  )
}
export default  AmountButtons