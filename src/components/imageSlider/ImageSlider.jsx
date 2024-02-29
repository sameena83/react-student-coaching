import React, {useState,useEffect} from 'react'
import {BsArrowBarLeft,BsArrowBarRight} from "react-icons/bs"
import './style2.css'



function ImageSlider({url,limit,page}) {
    const [image,setImages]=useState([])
    const [currentSlide,setCurrentSlide]=useState(0)
    const[error,setError]=useState(null)
    const[loading,setLoading]=useState(false)

    async function fetchImage(getUrl){
        try {


            const response= await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data= await response.json()

            if(data){
                
               
                setImages(data)
                setLoading(false);
            }

        }

        catch(e){
           setError(e.message);
           setLoading(false);
        


        }


    }

    useEffect(()=> {

        if(url!== " "){

            fetchImage(url)
        }


    },[url])

    console.log(image)


    if(loading){

       return <div> Loading data, please wait</div>
    }


    function handlePrevious(){
        setCurrentSlide(currentSlide===0 ? image.length-1 : currentSlide-1)


    }

    function handleNext(){

        setCurrentSlide(currentSlide===image.length-1? 0: currentSlide+1)

        
    }



  return (
    <div className='container'>
        <BsArrowBarLeft onClick ={handlePrevious}   className="arrow arrow-left"/>
        {

            image&&image.length?
            image.map((imageItem,index)=>(
                <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={currentSlide===index? "current-image":"current-image hide-current-image"}
                
                />

            )):null

        }

<BsArrowBarRight onClick ={handleNext} className="arrow arrow-right"/>
<span className='circle-indicator'>

    {
        image&&image.length?
        image.map((_,index)=>(
            <button key={index} onClick={setCurrentSlide(index)} className={currentSlide===index?"current-indicator":"current-indicator inacive-indicator"}> </button>
        )):null
    }
</span>
        
        
        </div>
  )
}

export default ImageSlider