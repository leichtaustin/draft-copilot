import React from 'react';
import './PlayerCard.css'

const PlayerCard = (props) => {
    const { name, hits } = props;

    return (
        <div className='PlayerCard'>
            <h2>{name}</h2>
            <p>Hits: {hits}</p>
        </div>
    )
}

export default PlayerCard