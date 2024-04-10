import React from 'react';
import ProgressBar from './ProgressBar';
import { useSelector } from 'react-redux';
import monsterAvatar from '../assets/images/sephiroth.png'





const Monster = () => {

  const monster = useSelector((store) => store.fight.monster);


  return (
    <section className='mb-16'>
      <div className="pt-16">
        <div className="w-full flex flex-row justify-center items-end relative h-72">
          <div className="">
            <img className="absolute -translate-y-64 z-10" src={monsterAvatar} alt='monster' />
          </div>
          <div className="flex justify-end rounded-lg p-4 bg-blue-700 w-1/2 backdrop-filter backdrop-blur-md bg-opacity-10 border border gray-200">
            <div className="w-3/4 h-8 flex items-end">

              <ProgressBar pv={monster.pv}
                pvMax={monster.pvMax}
                bgType={monster.bgType}
                faType={monster.faType}
                barName={monster.barName} />
            </div>
          </div>
        </div>
      </div>

    </section >
  )
}



export default Monster;