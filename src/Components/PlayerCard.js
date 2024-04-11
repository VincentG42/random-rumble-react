import React from 'react';
import ButtonCapacity from './ButtonStandardCapacity';
import ButtonSpecialAbility from './ButtonSpecialAbility'
import ProgressBar from './ProgressBar';
import HealingButton from './HealingButton';
import RegenManaButton from './RegenManaButton';



function PlayerCard({ player }) {


    return (

        <div className=' relative flex flex-col justify-center items-center lg:items-start rounded-lg p-4 bg-blue-700  md:w-2/5 backdrop-filter backdrop-blur-md bg-opacity-10 border border gray-200'>
            <h5 className="text-xl font-bold bg-gradient-to-tr from-indigo-600 via-blue-300 to-red-200 text-transparent bg-clip-text mb-4">{player.name}</h5>
            <div className={`lg:absolute right-0 xl:bottom-0 md:bottom-8 xl:z-10 lg:mb-0 mb-4 ${player.isDead? 'grayscale' : ''}`}>

                <img src={player.avatar} className='max-w-48 h-auto max-h-60' alt='hero avatar'></img>
            </div>
            <div className="flex flex-col gap-8 w-3/5 mb-8">
                <ProgressBar pv={player.pv} pvMax={player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
                <ProgressBar pv={player.mana} pvMax={player.manaMax} faType='fa-fire-alt' barName=' : mana ' />


            </div >
            <div >

                {player.isDead === false ?

                    <div className="flex gap-2">
                        {player.hasPlayed ? <p className='text-neutral-100'> Waiting the others to play...</p> :
                            <>
                                <ButtonCapacity player={player} />
                                <ButtonSpecialAbility player={player} />
                                <HealingButton player={player} />
                                <RegenManaButton player={player} />
                            </>
                        }

                    </div> :

                    <p className='text-red-700 font-bold'> {player.name} is dead</p>
                }

            </div >

        </div >
    )
}




export default PlayerCard;