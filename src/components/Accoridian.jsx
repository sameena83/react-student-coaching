import React, {useState} from 'react'
import data from './data'
import './style.css'

function Accoridian() {

    const[selected,setSelected]=useState(null)

    function handleSelected (getCurrentId){

        setSelected(getCurrentId===selected? null: getCurrentId)
        console.log(selected)
        
    }
  return (
    <div className='accoridian'>
        <div className='btn-selected'>
        <button className='btn1'> Single Selection</button>
        <button className='btn2'> Multiple Selection</button>
        </div>
        <div className='accordian-container'>
            {

                data&&data.length >0 ? (

                    data.map(dataItem => (
                        <div className='items' onClick={()=>handleSelected (dataItem.id)}>
                            {dataItem.question}
                            <span> + </span>
                            {

                                selected===dataItem.id?
                                 <div>{dataItem.answer} </div>
                                : null

                            }
                       </div>
                    ))
                ): null
            }

        </div>
    </div>
  )
}

export default Accoridian