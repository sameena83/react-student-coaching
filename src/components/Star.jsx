import React , {useState} from 'react'
import {FaStar} from 'react-icons/fa'
import './style.css'

function Star() {

    const [hover,setHover]=useState(0)
    const [rating,setRating]=useState(0)

    function handleClick (getIndex){

        setRating(getIndex)
    }

    function handleMouseEnter(getIndex){
        setHover(getIndex)

    }
    function handleMouseLeave(){

        setHover(rating)
        

    }


    
  return (
    <div>
       {
        [...Array(5)]. map((_,index)=>{
            index+=1;

            return (

              
                 
                <FaStar
                size={50}
                key={index}
                onClick={()=>handleClick(index)}
                className={index <=(hover|| rating)?"active":"inactive"}
                onMouseLeave={()=>handleMouseEnter(index)}
                onMouseMove={()=>handleMouseLeave() }
                />
               

              
               
            )


        })


       }
    </div>
  )
}

export default Star