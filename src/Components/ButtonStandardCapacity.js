import React from 'react';
import { useDispatch } from 'react-redux';
import { hitMonster, hitBack } from '../features/fight/fightSlice';






function ButtonStandardCapacity({ player }) {
    const dispatch = useDispatch();
    const combat = (event) => {
        const heroHitVAlue = Math.floor(Math.random() * (20 - 5 + 1)) + 5;

        dispatch(hitMonster({
            hit: heroHitVAlue,
            playerId: event.target.id,
            specialAbility: false,
        },
            dispatch(hitBack({
                playerId: event.target.id

            }))
        ))

    }
    


        return (
            <button type="button" id={player.id} onClick={combat} className="btn btn-success material-tooltip-main ">
                Standard Hit
            </button>
        )
    
}





export default ButtonStandardCapacity;