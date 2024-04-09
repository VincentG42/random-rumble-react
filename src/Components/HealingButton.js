import React from 'react';
import { useDispatch } from 'react-redux';
import { heal } from '../features/fight/fightSlice';


function HealingButton({player}) {

    const dispatch = useDispatch();

    const healAction = () => {

        dispatch(heal({
            playerId: player.id
        }))
    }


    return (
        <button type="button"  onClick={healAction} className="btn btn-success material-tooltip-main heal_button" disabled={player.hasPlayed ? true : false} >
            Heal
        </button>
    )
}

    export default HealingButton