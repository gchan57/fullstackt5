import React, { useEffect, useState } from 'react'

const Demo = () => {
        const [posts,setPosts]=useState([])//use state helps to access cont variable outside
    useEffect(()=>{
        
        async function fetchPosts(){
               try{
                    const res= await fetch("https://api.restful-api.dev/objects");
                    const data= await res.json();
                    setPosts(data.slice(0,5))
               }
               catch(err){
                  console.log("Error While Fetching ",err)
               }
        }
        fetchPosts();// calling necessary 
    },[]);

    // const [seconds,setSeconds]=useState(0);
    // useEffect (()=>{ 
    //    console.log("Timer is here");
    //    const intervalId= setInterval(()=>{
    //     setSeconds(seconds+1);
    //    },1000) // 1sec interval

    //    return()=>{
    //     clearInterval(intervalId);
    //     console.log("Timer Removed")
    //    }
    // },[]) // run at first render only
    
  return (
            
    <> 
   
    { 
    posts.map((post)=>(
    <div className='bg-amber-100 gap-5'>
    <p className='bg-blue-100'>{post.name}</p>
    <br></br>
    </div>))
    }
    </>
   
  )
}

export default Demo