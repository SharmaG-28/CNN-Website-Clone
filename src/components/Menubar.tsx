import React from 'react'

interface newsProp {
    news : any
}


const Menubar = (props : newsProp) => {

    console.log(props.news)
    return (
        <div className='p-7 text-center'>
            <h1>{props?.news[0]?.title}   |   {props?.news[1]?.title}   |   {props?.news[2]?.title}   |   {props?.news[3]?.title}</h1>
        </div>
    )
}

export default Menubar