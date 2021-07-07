import React from 'react';
import PlayerCard from './PlayerCard';

function PlayersList({ players }) {
    return (
        <div className='player-list'>
            {players.map(player => (
                <PlayerCard 
                    key={player.id}
                    player={player}
                />
            ))}
        </div>
    )
}

export default PlayersList;