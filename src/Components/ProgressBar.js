import React from 'react';


function ProgressBar({ pv, pvMax, bgType, faType, barName }) {


        const percent = Math.round((pv/pvMax) *100)


        console.log(percent);

    return(

    <div className={`w-full bg-gradient-to-r from-red-100 from-${percent}% to-red-950 to-${percent}%`}>
        <p className="text-neutral-50">
            <span className='font-extrabold'>HP : </span><span>{pv}</span>/<span>{pvMax}</span>
        </p>

    </div>

    )

}

export default ProgressBar;