import React from 'react'
import logo from "../images/cnn-logo.png"
import menu from "../images/hamp.jpg"
import search from "../images/search.jpg"
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../firebase/setup'
import { signOut } from 'firebase/auth'

interface menuProp {
  setMenu:any
  searchRef:any
}

const Navbar = (props:menuProp) => {

  const logout = async() =>{
    try{
      await signOut(auth)
      !auth.currentUser?.email && toast.success("Logged Out successfully")
    }catch(err){
      console.error(err)
      let error:any = err
      toast.error(error)
    }
  }

  return (
    <>
    <ToastContainer/>
    <div className=' bg-black w-full text-white flex'>
        <img src={menu} onClick={()=> props.searchRef.current.focus()} className='w-14 p-4 ml-6 cursor-pointer'/>
        <img src={logo} onClick={()=> props.setMenu("Politics")} className=' w-16 cursor-pointer'/>
        <div className='flex p-4 '>
            <h1 onClick={()=> props.setMenu("US")} className=' ml-5 cursor-pointer'>US</h1>
            <h1 onClick={()=> props.setMenu("World")} className=' ml-5 cursor-pointer'>World</h1>
            <h1 onClick={()=> props.setMenu("Politics")} className=' ml-5 cursor-pointer'>Politics</h1>
            <h1 onClick={()=> props.setMenu("Business")} className=' ml-5 cursor-pointer'>Business</h1>
            <h1 onClick={()=> props.setMenu("Opinion")} className=' ml-5 cursor-pointer'>Opinion</h1>
            <h1 onClick={()=> props.setMenu("Health")} className=' ml-5 cursor-pointer'>Health</h1>
            <h1 onClick={()=> props.setMenu("Entertainment")} className=' ml-5 cursor-pointer'>Entertainment</h1>
            <h1 onClick={()=> props.setMenu("Style")} className=' ml-5 cursor-pointer'>Style</h1>
            <h1 onClick={()=> props.setMenu("Travel")} className=' ml-5 cursor-pointer'>Travel</h1>
            <h1 onClick={()=> props.setMenu("Sports")} className=' ml-5 cursor-pointer'>Sports</h1>
            <h1 onClick={()=> props.setMenu("more")} className=' ml-5 cursor-pointer'>More</h1>
            <h1 onClick={()=> props.setMenu("audio")} className=' ml-40 cursor-pointer'>Audio</h1>
            <h1 onClick={()=> props.setMenu("live tv")} className=' ml-5 cursor-pointer'>Live TV</h1>
            <img onClick={()=> props.searchRef.current.focus()} src={search} className='ml-5 w-5 h-6 cursor-pointer'/>
        </div>
        {auth.currentUser?.emailVerified ? <h1 onClick={logout} className=' ml-2 mt-4 pl-2 border border-spacing-0 rounded-lg w-16 h-7 cursor-pointer'>Logout</h1> : <Link to="/login"><h1 className=' ml-2 mt-4 pl-2 border border-spacing-0 rounded-lg w-16 h-7 cursor-pointer'>Log in</h1></Link>}
    </div>
    </>
  )
}

export default Navbar