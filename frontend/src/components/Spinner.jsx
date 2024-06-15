import React from 'react'

const Spinner = () => {
    return (
        <div className='min-h-screen w-full absolute top-0 left-0 justify-center items-center flex'>
            <div className='animate-ping w-16 h-16 m-8 rounded-full bg-sky-600' />
        </div>
    )
}

export default Spinner