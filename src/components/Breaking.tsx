import React from 'react'

interface newsProp {
    news : any
    menu : any
}

const Breaking = (props : newsProp) => {

    return (
        <>
        <h1 className='text-3xl font-bold mb-2 ml-5'>{props.menu}</h1>
        {props.menu && <hr/>}
        <div className='grid grid-cols-2 mt-2'>
            <div className='pl-5'>
                {!props.menu && <h1 className='text-5xl text-center font-bold'>{props.news[3]?.title}</h1>}
                <img src={props.news[3]?.urlToImage} className='mt-3'/>
                {props.menu && <h1 className='text-5xl text-center font-bold mt-5'>{props.news[3]?.title}</h1>}
            </div>

            <div className='grid grid-cols-2 p-3'>
                <div>
                    <img src={props.news[8]?.urlToImage} />
                    <h1 className='font-bold text-lg mt-3 ml-1'>{props.news[8]?.title}</h1>
                    <h1 className=' ml-1'><span className='font-extrabold text-4xl'>. </span>{props.news[8]?.content}</h1>
                </div>
                <div>
                    <img src={props.news[9]?.urlToImage} className='ml-3'/>
                    <h1 className='font-bold text-lg mt-3 ml-4'>{props.news[9]?.title}</h1>
                    <h1 className=' ml-4'><span className='font-extrabold text-4xl'>. </span>{props.news[9]?.content}</h1>
                </div>
            </div>
        </div>
        </>
    )
}

export default Breaking