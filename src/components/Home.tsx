import React, { useEffect, useState } from 'react'
import logo from "../images/cnn-logo.png"
import { Link } from 'react-router-dom'
import { auth } from '../firebase/setup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface newsProp {
    news : any
    search: any
}

const Home = (props : newsProp) => {

    const message = () => {
        toast.error("Please Login")
    }

    const searchString = typeof props?.search === 'string' ? props?.search.toLowerCase() : props?.search

    return (
        <>
        <ToastContainer/>
        <div>
            <hr className='mt-5'/>
            <h1 className='bg-red-600 w-10 ml-4 h-1'>.</h1>
            <h1 className='ml-4 font-bold text-sm'>MORE TOP STORIES</h1>
            <div className='grid grid-cols-3'>
                <div className='p-2'>
                    <img src={props.news[4]?.urlToImage} className='h-60'/>
                    <h1 className='text-xl font-bold'>{props.news[4]?.title}</h1>
                    <h1>{props.news[4]?.content}</h1>
                </div>
                <div className='p-2'>
                    <img src={props.news[5]?.urlToImage} className='h-60'/>
                    <h1 className='text-xl font-bold'>{props.news[5]?.title}</h1>
                    <h1>{props.news[5]?.content}</h1>
                </div>
                <div className='p-2'>
                    <img src={props.news[6]?.urlToImage} className='h-60'/>
                    <h1 className='text-xl font-bold'>{props.news[6]?.title}</h1>
                    <h1>{props.news[6]?.content}</h1>
                </div>
            </div>
            <hr className='m-3'/>
            <div className='grid grid-cols-4'>
                {props?.news?.filter((data:any)=> data?.title.toLowerCase().includes(searchString)).map((data: any) => {
                    return <>
                        { auth.currentUser?.emailVerified ? <Link to="/details" state={{data:data}}>
                            <div className="max-w-sm rounded overflow-hidden ml-3 mt-3">
                                <img className="w-full h-40" src={data?.urlToImage} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{data?.title}</div>
                                </div>
                            </div>
                        </Link> 
                        :
                        <div onClick={message} className="max-w-sm rounded overflow-hidden ml-3 mt-3">
                            <img className="w-full h-40" src={data?.urlToImage} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{data?.title}</div>
                            </div>
                        </div>}
                    </>
                })}
            </div>
        </div>
        </>
    )
}

export default Home