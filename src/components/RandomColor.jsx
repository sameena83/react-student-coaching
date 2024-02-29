import React, {useState,useEffect} from 'react'

function RandomColor() {

    const[color,setColor]=useState('#000000')
    const[typeOfColor,settypeOfColor]=useState("hex")

   useEffect(()=>{

 if(typeOfColor==="hex") handleHexColor()

 else {
    HandleRgbColor()
 }

   },
   [typeOfColor])

    function utilizeRandom(length){
    
        return Math.floor(Math.random()*length)

    }

    function handleHexColor(){

        const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
        let hexcolor="#"

        for(let i=0;i<6;i++){

            hexcolor+=hex[utilizeRandom(hex.length)]
        }
       
      console.log(hexcolor)
      setColor(hexcolor)



    }

    function HandleRgbColor(){

        let r= utilizeRandom(256);
        let g=utilizeRandom(256);
        let b= utilizeRandom(256);

        let rgbcolor= ` rgb(${r} ${g} ${b})`

        setColor(rgbcolor)

         
    }


  return (
    <div style={{height:'70vh',
    width:"70vw",
    backgroundColor:color}}>
  
        <button className='btn1' onClick={typeOfColor=== 'rgb'? HandleRgbColor: handleHexColor}> 
        Generate Random Color </button>
        <button className='btn3' onClick={()=>settypeOfColor("hex")} > Hex Color Button</button>
        <button className='btn4' onClick={()=>settypeOfColor("rgb")}   > RGB Color Button</button>
        <div>
            <h1> {color}</h1>
            <h3> {typeOfColor}</h3>
        </div>
    </div>
  )
}

export default RandomColor