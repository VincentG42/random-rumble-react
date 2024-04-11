import React from 'react';
import ProgressBar from './ProgressBar';
import { useSelector } from 'react-redux';
import monsterAvatar from '../assets/images/sephiroth.png'





const Monster = () => {

  const monster = useSelector((store) => store.fight.monster);


  return (
    <section className='mb-8 mt-24 md:mt-8'>
      <div className='h-72 flex items-end justify-center px-8 md:px-0'>

        
        <div className="md:w-1/2 flex flex-row flex-wrap  justify-center md:justify-end items-end relative p-4 bg-blue-700 backdrop-filter backdrop-blur-md bg-opacity-10 border border gray-200 rounded-lg">
        <h5 className="text-xl font-bold bg-gradient-to-tr from-indigo-600 via-blue-300 to-red-200 text-transparent bg-clip-text mb-4 text-center w-full">Sephiroth</h5>
          <img src={monsterAvatar} alt='monster' className="md:absolute left-0 bottom-0 bottom md:z-10 w-auto" />
          <div className="w-3/4 h-8 flex justify-end items-end">
            <ProgressBar pv={monster.pv}
              pvMax={monster.pvMax}
              bgType={monster.bgType}
              faType={monster.faType}
              barName={monster.barName} />
          </div>
        </div>
      </div>
    </section >
  )
}



export default Monster;