import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { auth } from "../utils/firebase";
import { addUser, removeUser } from '../utils/userSlice';
import { logo } from "../utils/constant";
import { gptToggleSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=> store.user)
  const handleClick = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });
  }

  useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth,(user) =>{
      if(user){
        const {uid, email, displayName, photoURL} = user;
        dispatch( addUser({uid: uid, email:email, displayName: displayName, photoURL: photoURL}));
        navigate('/browse')
      }else{
        dispatch(removeUser())
        navigate('/')
      }
    })
    return ()=>unsubscribe()
  },[])

    
  const handleGptToggleClick = ()=>{
    dispatch(gptToggleSearchView())
  }

  return (
    <div className='absolute w-full flex justify-between px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-40' src={logo} alt='Logo'/>
      {user && (
        <div className="flex items-center">
          <button className="p-1 bg-red-700 rounded-md text-md text-white mx-2"
            onClick={()=>handleGptToggleClick()}
          >
            GPT Search
          </button>
          <img className="w-[40px] h-[40px] rounded-[40px] mr-3" src={user?.photoURL} alt="userImage"/>
          
        </div>
      )} 
    </div>
  )
}

export default Header;