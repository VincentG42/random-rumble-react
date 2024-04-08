import React from 'react';
import ButtonCapacity from './ButtonStandardCapacity';
import ButtonSpecialAbility from './ButtonSpecialAbility'
import ProgressBar from './ProgressBar';



function PlayerCard({ player }) {


    return (
        // <div key={key} className="col-sm-3 card center" id={`joueur${key}`}>
        <div>
            <div className="card-body text-center">
                <h5 className="card-title">{player.name}</h5>
                <ProgressBar pv={player.pv} pvMax={player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
                <ProgressBar pv={player.mana} pvMax={player.manaMax} faType='fa-fire-alt' barName=' : mana ' />

                <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
                <div className="row ">

                    {player.isDead === false ?
                            <div >
                    
                            <ButtonCapacity player={player} />
                            <ButtonSpecialAbility player={player} />
                            <ButtonCapacity player={player} />
                            <ButtonCapacity player={player} />
    
                        </div> :
                    
                        <p> Sick</p>
                    }
                    
                </div >
            </div >

        </div >
    )
}




export default PlayerCard;