import React from 'react';
import { useDispatch } from 'react-redux';
import { hitMonster, hitBack } from '../features/fight/fightSlice';






function ButtonStandardCapacity({ player }) {
    const dispatch = useDispatch();

    const combat = () => {
        const heroHitVAlue = Math.floor(Math.random() * (20 - 5 + 1)) + 5;

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
            <button type="button" onClick={combat} className="btn btn-success material-tooltip-main hit_button" disabled={player.hasPlayed ? "true" : ""}>
                Standard Hit
            </button>
        )
    
}





export default ButtonStandardCapacity;