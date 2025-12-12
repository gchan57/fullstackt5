import React, { useState } from 'react'
import Home from './Home'

const Greeting = () => {
    const [count,setCount]=useState(0);
     const handleClickS=()=> {
            setCount(count +1);
        }
         const handleClickD=()=> {
            if(count-1<0){
                setCount(0);
                alert("Hey No negative");
                return;
            }
            setCount(count -1);
        }
        const Rest=()=>{
            setCount(0);
        }
  return (
    //Cheat code for center below
    <div class='h-screen flex justify-center item-center'> 
    <div className='flex flex-col justify-center items-center gap-4'>
        {/* <p className='text-blue-200'>I am groot </p>
        <h1 className='text-amber-400 bg-amber-100 text-center '>Hello</h1>
    <p>{props.isLoggedIn? <>Hello Welcome {props.name}</> :<>${props.name} Log in first</>}</p>
        <p>I am {props.name}</p>
        <p>My age is {props.age}</p> */}
        {/* <Home></Home> */}
       <h2 className='bg-amber-100 p-2 rounded shadow-lg'>Counter: {count} </h2>
       <div className='flex gap-4'>
     <div> <button onClick={handleClickS} className='text-black bg-emerald-600 rounded-2xl p-2'>+</button></div>
     <div> <button onClick={handleClickD} className='text-black bg-red-500 rounded-2xl p-2'>-</button></div>
     <div> <button onClick={Rest} className='text-black bg-blue-400 rounded-2xl p-2'>0</button></div>
     </div>
     </div>
    </div>
  )
}

export default Greeting