import React, { useState } from 'react'
import logo from "../images/cnn.png"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/setup'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const login = async() => {
        try{
            await signInWithEmailAndPassword(auth, email, password)
            auth.currentUser?.emailVerified ? toast.success("LoggedIn successfully") : toast.error("Please verify email")
            setTimeout(()=>{
                auth.currentUser?.emailVerified && navigate("/")
            },1000)
        }
        catch(err:any){
            console.error(err);
            let errorMessage = "An error occurred. Please try again.";

            if (err.code === "auth/invalid-credential") {
                errorMessage = "Invalid email or password.";
            } else if (err.code === "auth/wrong-password") {
                errorMessage = "Invalid email or password.";
            } else if (err.code === "auth/too-many-requests") {
                errorMessage = "Too many unsuccessful login attempts. Please try again later.";
            }

            toast.error(errorMessage);
        }
    }

    return (
        <>
            <ToastContainer/>
            <div className='bg-red-100 h-screen flex flex-col items-center justify-center'>
                <div className='bg-white flex flex-col items-center justify-center w-5/12 h-5/6 rounded-lg shadow-lg'>
                    <img src={logo} className=' w-28 h-14' />
                    <h1 className=' text-2xl font-bold mt-3'>Log in to your CNN clone account</h1>
                    <h1 className=' m-3'>Don't have an account? <Link to="/signup"><span className='underline'>Sign up</span></Link>.</h1>
                    <input onChange={(e)=> setEmail(e.target.value)} type="text" className="mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-96 p-2.5 " placeholder="Email address" required />
                    <input onChange={(e)=> setPassword(e.target.value)} type="password" className="mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-96 p-2.5 " placeholder="Password" required />
                    <button onClick={login} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-96 mt-4 h-12">
                        Sign in
                    </button>
                </div>
            </div>
        </>
    )
}

export default Login