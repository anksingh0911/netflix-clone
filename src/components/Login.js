import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {bg_url, user_avatar } from "../utils/constant";

const Login = () => {
  const navigate = useNavigate();
  const dispatch =useDispatch();
  const [isSignForm, setSignInForm] = useState(true);
  const [errorMessages, setErrorMessages] = useState();

  const handleToggle = () => {
    setSignInForm(!isSignForm);
    setErrorMessages(null);
  };
  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = () => {
    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessages(message);
    if (message) return;
    if (!isSignForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user,{
            displayName: name.current.value,
            photoURL: user_avatar
          })
          .then(()=> {
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch( addUser({uid: uid, email:email, displayName: displayName, photoURL: photoURL}));
          })
          .catch((error)=>{
            setErrorMessages(error.message)
          })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessages(errorCode + "-" + errorMessage);
          // .. 
        });
    } else {
      // signIn logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessages(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
        <Header/>
        <div className='absolute'>
          <img src={bg_url} className="h-screen w-screen object-cover bg-black/80 -z-10" alt="BackgroundImage"/>
        </div>
        <div className="absolute flex justify-center left-0 right-0">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-[50%] sm:mt-[30%] md:mt-[20%] p-5 md:w-[30%] sm:w-[60%] w-[90%] bg-black rounded-lg bg-opacity-80 "
        >
          <h1 className="text-2xl mb-3 text-center text-white font-semibold ">
            {isSignForm === true ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignForm && (
            <input
              className="p-2 mb-3 w-full bg-gray-700 text-gray-400 font-light text-sm"
              type="text"
              placeholder="Full Name"
              ref={name}
            />
          )}
          <input
            className="p-2 mb-3 w-full bg-gray-700 text-gray-400 font-light text-sm"
            type="text"
            ref={email}
            placeholder="Email Address"
          />
          <input
            className="p-2 mb-3 w-full bg-gray-700 text-gray-400 font-light text-sm"
            type="password"
            ref={password}
            placeholder="Password"
          />
          {/* {!isSignForm && (
            <input
              className="p-2 mb-5 w-full bg-gray-700 text-gray-400 font-light text-sm"
              type="password"
              placeholder="Confirm Password"
            />
          )} */}
          {errorMessages && (
            <p className="text-sm text-red-700 mb-2">{errorMessages}</p>
          )}
          <button
            className="p-2 mb-5 bg-red-700 w-full text-white font-semibold"
            onClick={handleSubmit}
          >
            {isSignForm === true ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-white text-sm font-light cursor-pointer"
            onClick={() => handleToggle()}
          >
            {isSignForm === true
              ? "If you are new ? Sign up"
              : "Already user ? Sign In"}
          </p>
        </form>
        </div>
    </div>
  );
};

export default Login;
