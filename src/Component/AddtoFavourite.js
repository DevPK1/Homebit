import React, { useState } from 'react';
import { BsHeart,BsHeartFill } from "react-icons/bs";
const AddtoFavourite=()=>{
  const [favourite,setFavourite] = useState(true);
  return(
    <div onClick={()=>setFavourite(!favourite)}>
    {
      favourite?<BsHeart className="fs-5 heart" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to favourite list"/>
      :<BsHeartFill className="fs-5 heart-fill" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove from favourite list"/>
    }
    </div>
  )
}
export default AddtoFavourite