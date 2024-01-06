import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { auth } from "../utils/firebase";
import { addUser, removeUser } from '../utils/userSlice';
import { logo } from "../utils/constant";

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


  return (
    <div className='absolute w-full flex justify-between px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img 
        className='w-40'
        src={logo} 
        alt='Logo'
      />
      {user && (
        <div className="flex items-center">
          <img className="w-[40px] h-[40px] rounded-[40px] mr-3" src={user.photoURL} alt="userImage"/>
          <p className="text-white text-sm mr-2">{user.displayName}</p>
          <button className='text-sm text-white' onClick={handleClick}>Sign out</button>
        </div>
      )} 
    </div>
  )
}

export default Header;