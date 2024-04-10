import React from 'react'
import { useDispatch } from 'react-redux';
import { regenMana } from '../features/fight/fightSlice';

function RegenManaButton({ player }) {

    const dispatch = useDispatch()

    const mana = () => {
        dispatch(regenMana({
            playerId : player.id

        }))

    }



        return (
            <button type="button" onClick={mana} disabled={player.hasPlayed ? "true" : ""}
                className='relative rounded px-3 py-1.5 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300'>
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Regen mana</span>
            </button>
        )
    
}

export default RegenManaButton