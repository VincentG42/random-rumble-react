import React from 'react';
import PlayerCard from './PlayerCard';
import { useSelector } from 'react-redux';




const PlayerList = () => {

  const players = useSelector((store) => store.fight.players);

  return (
    
      <div className='flex gap-12 flex-wrap w-full justify-center'>
        {players.map(player => (
          <PlayerCard key={player.id} player={player} disabled={player.isDead ? true : false} />
        ))}
      </div>
  );
}
export default PlayerList;