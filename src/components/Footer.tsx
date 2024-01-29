import React from 'react'

interface newsProp {
    news : any
    setSearch:any
    searchRef:any
    setMenu:any
}

const Footer = (props : newsProp) => {
  return (
    <div className='bg-black h-5/6 p-4'>
        <input ref={props.searchRef} onChange={(e)=> props.setSearch(e.target.value)} type="text" id="first_name" className="bg-gray-50 border border-gray-300 outline-none text-black text-lg rounded-sm  block w-full h-10 p-2.5 " placeholder="Search CNN clone..." required/>
        <hr className='mt-3'/>
        <div className='flex text-white pt-3 justify-between'>
            <h1 onClick={()=> {
                props.setMenu("US")
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }} className='cursor-pointer'>US</h1>
            <h1 onClick={()=> {
                props.setMenu("World")
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }} className='cursor-pointer'>World</h1>
            <h1 onClick={()=> {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                props.setMenu("Politics")
            }} className='cursor-pointer'>Politics</h1>
            <h1 onClick={()=> {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                props.setMenu("Business")
            }} className='cursor-pointer'>Business</h1>
            <h1 onClick={()=> {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                props.setMenu("Opinion")
            }} className='cursor-pointer'>Opinion</h1>
            <h1 onClick={()=> {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                props.setMenu("Health")
            }} className='cursor-pointer'>Health</h1>
            <h1 onClick={()=> {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                props.setMenu("Entertainment")
            }} className='cursor-pointer'>Entertainment</h1>
            <h1 onClick={()=> {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                props.setMenu("Style")
            }} className='cursor-pointer'>Style</h1>
            <h1 onClick={()=> {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                props.setMenu("Travel")
            }} className='cursor-pointer'>Travel</h1>
            <h1 onClick={()=> {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                props.setMenu("Sports")
            }} className='cursor-pointer'>Sports</h1>
            <h1 onClick={()=> {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                props.setMenu("more")
            }} className='cursor-pointer'>More</h1>
            <h1 onClick={()=> {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                props.setMenu("audio")
            }} className='cursor-pointer'>Audio</h1>
            <h1 onClick={()=> {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                props.setMenu("live tv")
            }} className='cursor-pointer'>Live TV</h1>
        </div>
        <hr className=' mt-3
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        '/>
        <h1 className='text-white text-4xl font-bold mt-4'>In Case You Missed It</h1>
        <div className='flex mt-3'>
            <img src={props.news[15]?.urlToImage} className='h-96 w-4/6'/>
            <div className='p-2'>
                <h1 className='text-white ml-3 font-medium'>{props.news[15]?.title}</h1>
                <hr className='mt-3 ml-5 mr-5 mb-3'/>
                <h1 className='text-white ml-3 font-medium'>{props.news[15]?.content}</h1>
            </div>
        </div>
        <hr className='mt-3'/>
        <h1 className='text-white text-center mt-3'>© 2024 Cable News Network Clone.All Rights Reserved.</h1>
    </div>
  )
}

export default Footer