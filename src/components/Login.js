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
            photoURL:"https://i.pinimg.com/originals/7d/34/d9/7d34d9d53640af5cfd2614c57dfa7f13.png"
          })
          .then(()=> {
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch( addUser({uid: uid, email:email, displayName: displayName, photoURL: photoURL}));
            navigate('/browse')
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
          navigate('/browse')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessages(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <>
      <Header />

      <div
        className='w-full h-[100vh] 
    bg-cover	bg-no-repeat flex items-center justify-center
    bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/02b64fbf-58a4-4f95-ad71-aca28d902936/AE-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg")]'
      >
        <form
          onSubmit={(e) => e.preventDefault()}
          className="p-5 lg:w-[22%] md:w-4/12 sm:w-[60%] w-[60%] bg-black rounded-lg bg-opacity-80"
        >
          <h1 className="text-2xl mb-3 text-center text-white font-semibold ">
            {" "}
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
    </>
  );
};

export default Login;
