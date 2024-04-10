import React from 'react';


function ProgressBar({ pv, pvMax, bgType, faType, barName }) {


        const percent = Math.round((pv/pvMax) *100)


    return(

    <div className='w-full bg-red-900 '>
        <div  className='relative h-2 bg-gradient-to-r from-blue-300 to-neutral-50' 
                style={{width :percent +'%' }}>

        <p className="text-neutral-50 absolute  left-8 drop-shadow-lg -translate-y-6 text-center w-full">
            {faType === 'fa-heart' ? <span className='font-extrabold'>HP : </span> :<span className='font-extrabold'>MP : </span>} <span>{pv}</span>/<span>{pvMax}</span>
        </p>
        </div>

    </div>

    )

}

export default ProgressBar;