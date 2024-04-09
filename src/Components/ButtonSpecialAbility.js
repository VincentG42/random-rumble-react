import React from 'react';
import { useDispatch } from 'react-redux';
import { hitMonster, hitBack } from '../features/fight/fightSlice';



function ButtonSpecialAbility({ player }) {

    const dispatch = useDispatch();

    const combat = () => {
        const heroHitVAlue = Math.floor(Math.random() * (50 - 20 + 1)) + 20;

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
        <button type="button" onClick={combat} className="btn btn-success material-tooltip-main spec_button" disabled={player.hasPlayed ? "true" : ""} >
            Special Ability
        </button>
    )
}





export default ButtonSpecialAbility;