import React, {useState,useEffect} from 'react'

function MapFilter() {
    const [users,setUsers]=useState([])
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState("")
    const [numbers,setNumbers]=useState([1,2,3,4,5,6,7,8,9,10])
    
    const url="https://jsonplaceholder.typicode.com/users"

    useEffect(()=> {

       fetch(url)
       .then((response)=>response.json())
       .then((data)=> setUsers(data))
       .catch(error=>console.log(error))

        



},[])

const mappedNumbers = ()=> {

    let square= numbers.map((number)=>{
        return number * number 

    })
        
        
    
     setNumbers(square)
}



const mappedNumbers1 = ()=> {

    let num= numbers.filter((number)=>{
        return number <=5

    }).map((n)=> {

        return n *n

    })
        
        
    
     setNumbers(num)
}
    
    
const mapData =()=> {

    let filteredData= users.filter((user)=> {
        return user.id <=5
      

    });
    setUsers(filteredData)
}

 const mData=()=> {

   let newArray=users.filter((user)=>{
        return user.name.includes ("a")
    })

   setUsers(newArray)
 }

 const newArray =()=>{

    let LArray= users.filter((user)=> {
        return user.name.startsWith("L")
    })
   
    setUsers(LArray)

 }
   
  return (
    <div className='container'>
      {users &&users.map((user,id)=> (
        <div>
        <p key={id}> {user.name}</p>
  

        </div>

      ))}

     
      <button onClick={mapData}>
        Mapped Array
      </button>
      <button onClick={mData}> Get  </button>
      <button onClick={newArray}> StartsWithl</button>


     <div>
     {numbers.map((num)=> (
        <div>{num}</div>
     ) )}
     </div>
     <button onClick={mappedNumbers}> square </button>
     <button onClick={mappedNumbers1}> FilteredNumber </button>
    </div>

   
  )
}

export default MapFilter