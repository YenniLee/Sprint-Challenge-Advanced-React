import React from 'react';
import PlayerCard from './PlayerCard';

function PlayersList ({ playerData }) {
    console.log(playerData)
    return (
        <div className='player-list'>
            {playerData.map(player => (
                <PlayerCard key={player.id} player={player} />
            ))}
        </div>
    )
}

export default PlayersList;