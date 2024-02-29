import React, {useState} from 'react'
import './style4.css'

function ToolTip({children,content}) {

    const[visibility,setVisibility]=useState(false);
  return (
    <div>
    <div className='container-tool'
       
     onMouseEnter={()=>setVisibility(true)}
     onMouseLeave={()=>setVisibility(false)}
     
     >
         

   {content}
   {
    visibility? <div className='tooltip'>{children} </div>:null
   }
       </div>

    </div>
  )
}

export default ToolTip;