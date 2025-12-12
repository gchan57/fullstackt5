import React from 'react'

const Home = ({users}) => {
    
  return (
    <>
     <ul>
        {   users.map((user)=>(
               <li className='text-amber-950 '>{user.name}</li>
        ))
        }
    </ul>
    </>
  )
}

export default Home