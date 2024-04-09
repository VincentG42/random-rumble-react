import React from 'react'
import { useDispatch } from 'react-redux';

function RegenManaButton({player}) {

    const dispatch = useDispatch()

    const regenMana = () => {
        dispatch(regenMana({
            
        }))

    }
    return (
        <button type="button"  onClick={regenMana} className="btn btn-success material-tooltip-main heal_button" disabled={player.hasPlayed ? true : false} >
            Heal
        </button>
    )
}

export default RegenManaButton