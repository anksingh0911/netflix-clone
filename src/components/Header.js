import { useEffect, useState } from "react";
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
  const [isShow, setIsShow] = useState(false);
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

  const handleUserToggle=()=>{

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
          <div className="relative">
            <img className="w-[40px] h-[40px] rounded-[40px] mr-3 cursor-pointer" 
              src={user?.photoURL} 
              alt="userImage"
              onClick={()=>setIsShow(!isShow)}
            />
            {isShow && (
                <div className="bg-black/80 absolute rounded-md border-[1px] right-0 top-12 w-[150px] shadow-sm shadow-slate-100">
                <p className="text-white text-sm border-b-[1px] px-2 py-1">{user.displayName}</p>
                <button className='text-sm w-full text-left text-white px-2 py-1' onClick={handleClick}>Sign out</button>
              </div>
            )}
            
          </div>
        </div>
      )} 
    </div>
  )
}

export default Header;