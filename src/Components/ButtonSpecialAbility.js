import React from 'react';
import { useDispatch } from 'react-redux';
import { hitMonster, hitBack } from '../features/fight/fightSlice';



function ButtonSpecialAbility({ player }) {

    const dispatch = useDispatch();

    const combat = (event) => {
        const heroHitVAlue = Math.floor(Math.random() * (40 - 10 + 1)) + 10;

        dispatch(hitMonster({
            hit: heroHitVAlue,
            playerId: event.target.id,
            specialAbility : true,
            manaCost : 5,
        },
        
        dispatch(hitBack({
            playerId: event.target.id

            }))
        ))

    }

    return (
        <button type="button" id={player.id} onClick={combat} className="btn btn-success material-tooltip-main" >
                Special Ability
                </button>
                )
}





                export default ButtonSpecialAbility;