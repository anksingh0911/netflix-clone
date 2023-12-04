import React, { useState, useRef } from 'react'
import Header from './Header';
import { checkValidation } from '../utils/validate';

const Login = () => {

  const [isSignForm, setSignInForm] = useState(true);
  const [errorMessages, setErrorMessages] = useState()
  const handleToggle = ()=>{
    setSignInForm(!isSignForm)
  }
  
  const email = useRef(null);
  const password = useRef(null);

const handleSubmit = ()=>{
  const message = checkValidation(email.current.value, password.current.value)
  setErrorMessages(message)
}
  return (
    <div>
      <Header/>
      <img 
      className='absolute'
      src='https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/02b64fbf-58a4-4f95-ad71-aca28d902936/AE-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg' 
      alt='background_Image'
      />

      <form onSubmit={(e)=> e.preventDefault()} className='p-5 m-2 absolute w-3/12 bg-black mx-auto right-0 left-0 my-[10%] rounded-md bg-opacity-80'>
        <h1 className='text-2xl mb-5 text-center text-white font-semibold '> {isSignForm === true ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignForm &&(
          <input className='p-3 mb-5 w-full bg-gray-700 text-gray-400 rounded-md' type="text" placeholder='Full Name'/>
        )}
        <input className='p-3 mb-5 w-full bg-gray-700 text-gray-400 rounded-md' type="text" ref={email} placeholder='Email Address'/>
        <input className='p-3 mb-5 w-full bg-gray-700 text-gray-400 rounded-md' type="password" ref={password} placeholder='Password'/>
        {!isSignForm &&(
          <input className='p-3 mb-5 w-full bg-gray-700 rounded-md' type="password" placeholder='Confirm Password'/>
        )}
        {errorMessages && (<p className='text-sm text-red-700 mb-2'>{errorMessages}</p>)}
        <button className='p-2 mb-5 bg-red-700 w-full rounded-md text-white font-semibold' onClick={handleSubmit}>
          {isSignForm === true ? 'Sign In' : 'Sign Up'}
        </button>
        <p className='text-white text-sm cursor-pointer' onClick={()=>handleToggle()}>
          {isSignForm === true ? 'If you are new ? Sign up' : 'Already user ? Sign In'}
        </p>
      </form>
    </div>
  )
}

export default Login