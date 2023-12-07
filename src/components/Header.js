import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();
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

  return (
    <div className='absolute w-full flex justify-between px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img 
        className='w-40'
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
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

export default Header