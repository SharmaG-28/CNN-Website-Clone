import React from 'react'
import { useLocation } from 'react-router-dom'

const Details = () => {

    const location = useLocation()

    return (
        <div className='p-3'>
            <h1 className='text-5xl font-bold'>{location?.state?.data?.title}</h1>
            <h1 className='text-gray-500 mt-5'>By{location?.state?.data?.author}</h1>
            <div className='grid grid-cols-2 mt-3'>
                <img src={location?.state?.data?.urlToImage} className=' h-full w-full p-2 border border-spacing-2 border-gray-600'/>
                <div className='mt-5 text-xl ml-3 mr-3'>
                    <h1>{'->'}{location?.state?.data?.content}</h1>
                    <br />
                    <h1>{'->'}{location?.state?.data?.description}</h1>
                </div>
            </div>
        </div>
    )
}

export default Details