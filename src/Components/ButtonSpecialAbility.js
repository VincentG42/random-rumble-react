import React from 'react';
import { useDispatch } from 'react-redux';
import { hitMonster, hitBack } from '../features/fight/fightSlice';



function ButtonSpecialAbility({ player }) {

    const dispatch = useDispatch();

    const combat = () => {
        const heroHitVAlue = Math.floor(Math.random() * (75 - 30 + 1)) + 30;

        dispatch(hitMonster({
            hit: heroHitVAlue,
            playerId: player.id,
            specialAbility: true,
            manaCost: 5,
        },

            dispatch(hitBack({
                playerId: player.id,
            }))
        ))

    }

    return (
        <button type="button" onClick={combat}  disabled={player.hasPlayed ? "true" : ""} 
                className='relative flex justify-center items-center rounded px-3 py-1.5 overflow-hidden group bg-red-500 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300'>
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Special Hit</span>
        </button>
        )
}





export default ButtonSpecialAbility;