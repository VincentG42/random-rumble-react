import React from 'react';
import { useDispatch } from 'react-redux';
import { hitMonster, hitBack } from '../features/fight/fightSlice';



function ButtonStandardCapacity({ player }) {
    const dispatch = useDispatch();

    const combat = () => {
        const heroHitVAlue = Math.floor(Math.random() * (40 - 10 + 1)) + 10;

        dispatch(hitMonster({
            hit: heroHitVAlue,
            playerId: player.id,
            specialAbility: false,
        }),

            dispatch(hitBack({
                playerId: player.id

            })
            ))
    }


    return (
        <button type="button" onClick={combat} disabled={player.hasPlayed ? "true" : ""}
            className='relative rounded px-3 py-1.5 overflow-hidden group bg-sky-300 relative hover:bg-gradient-to-r hover:from-neutral-500 hover:to-neutral-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-neutral-400 transition-all ease-out duration-300'>
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Hit</span>

        </button>
    )

}





export default ButtonStandardCapacity;