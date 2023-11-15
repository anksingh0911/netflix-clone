import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignForm, setSignInForm] = useState(true);
  const handleToggle = ()=>{
    setSignInForm(!isSignForm)
  }
  return (
    <div>
      <Header/>
      <img 
      className='absolute'
      src='https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/02b64fbf-58a4-4f95-ad71-aca28d902936/AE-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg' 
      alt='Imag'
      />

      <form className='p-5 m-2 absolute w-3/12 bg-black mx-auto right-0 left-0 my-[10%] rounded-md bg-opacity-70'>
        <h1 className='text-2xl mb-5 text-center text-white font-semibold '> {isSignForm === true ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignForm &&(
          <input className='p-3 mb-5 w-full bg-gray-700 rounded-md' type="text" placeholder='Full Name'/>
        )}
        <input className='p-3 mb-5 w-full bg-gray-700 rounded-md' type="text" placeholder='Email Address'/>
        <input className='p-3 mb-5 w-full bg-gray-700 rounded-md' type="password" placeholder='Password'/>
        {!isSignForm &&(
          <input className='p-3 mb-5 w-full bg-gray-700 rounded-md' type="password" placeholder='Confirm Password'/>
        )}
        <button className='p-2 mb-5 bg-red-700 w-full rounded-md text-white font-semibold'>
          {isSignForm === true ? 'Sign In' : 'Sign Up'}
        </button>
        <p className='text-white text-lg' onClick={()=>handleToggle()}>
          {isSignForm === true ? 'If you are new ? Sign up' : 'Already user ? Sign In'}
        </p>
      </form>
    </div>
  )
}

export default Login