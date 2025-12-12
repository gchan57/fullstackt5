import React from 'react' //rafce tab
import Greeting from './Greeting'
import Home from './Home'
import Demo from './Demo'
import { Routes,Route } from 'react-router-dom'
import Navbar from './NavBar'
const App = () => {
  const name="Santhosh"
  const age=45
  const isLoggedIn= false;
  const users = [
        {id:1,name:"Prem"},
         {id:2,name:"Roshini"},
         {id:3,name:"Kattai"}
    ]
  return (
    <> 
    {/* <Greeting/> */}
    {/* <Greeting name={name} age={age} isLoggedIn={isLoggedIn}/> */}
    {/* <Home users={users}/> */}
    {/* <Demo/> */}
    <Navbar/>
    <Routes>
      <Route path='/' element={<Demo/>}/>
      <Route path='/user' element={<Home users={users}/>}/>
    </Routes>
    </>
  )
}
//in return uless we use div tag give empty tag to reduce space in dom
export default App