import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const Auth = () => {
    const [isRegister,setIsRegister]=useState(true)
    const handleRegister=async(e)=>{
      e.preventDefault();
      console.log("Register");
    }
    const handleLogin=async(e)=>{
        console.log("Login");
    }

  return (
    <div className='min-h-screen flex justify-center items-center bg-blue-50'>
        <div className='bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md'>
            {/* Toggle Button */}
            <div className="flex justify-center mb-6 gap-4">
  <button
    className={`px-4 py-2 font-semibold rounded-2xl ${
      isRegister
        ? 'bg-indigo-950 text-white'
        : 'bg-gray-400 text-rose-50 hover:bg-amber-700'
    }`}
    onClick={() => setIsRegister(true)}
  >
    Register
  </button>

  <button
    className={`px-4 py-2 font-semibold rounded-2xl ${
      !isRegister
        ? 'bg-indigo-950 text-white'
        : 'bg-gray-400 text-rose-50 hover:bg-amber-700'
    }`}
    onClick={() => setIsRegister(false)}
  >
    Login
  </button>
</div>
            {/* Dynamic forms */}
      {
  isRegister ? (
    <form onSubmit={handleRegister}>
      <input name="name" placeholder="Name" />
      <input name="email" type="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  ) : (
    
      <form onSubmit={handleLogin}>
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
         <button type="submit"> Login</button>
      </form>
    
  )
}
        </div>
    </div>
  )
}

export default Auth