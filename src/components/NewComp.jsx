import React, {useState} from 'react'

function NewComp() {

    const[place,setPlace]=useState(" ")

   

console.log(place)

    const countries=[

        {
            name:"India", value:"IN", cities:[
                "Delhi",
                "mumbai"
            ]

        },
        {

            name:"PAK" ,value:"PK", cities:[
                "Lahore",
                "Karachi"
            ]

        },
        {
            name:"Bangladesh", value:"BG", cities:[
                "Dhaka",
                
                "Chittagong"
            ]

        }

       
    ];
  return (
    <div>
  <select onChange={ (e)=>setPlace(e.target.value)}>
        {
            countries.map((country, index)=>{
                return (<option value={index} key={index}>
                    {country.name}

                </option>)


            })
        }

</select>

<select  >
        {
            countries.map((country, index)=>{
                return (<option value={index} key={index}>
                    {place==index?country.cities:null}

                </option>)


            })
        }

</select>


    </div>
  )
}

export default NewComp