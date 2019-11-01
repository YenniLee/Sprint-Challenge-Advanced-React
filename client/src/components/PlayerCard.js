import React from 'react';

function PlayerCard({ player }) {
    return (
        <div className='player-card'>
            <h3>{player.name}</h3>
            <p>{player.country}</p>
            <p>Google Searches: {player.searches}</p>
        </div>
    )
}

export default PlayerCard;