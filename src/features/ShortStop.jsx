import React from 'react';
import { sampleData } from '../api/jsondata';
import PlayerCard from '../components/PlayerCard/PlayerCard';

const ShortStop = () => {
    const shortStopData = sampleData.filter(player => player.Position === 'SS')
    
    return (
        <>
            {shortStopData.map(player => (
                <PlayerCard
                    name = {player.Name}
                    hits = {player.Hits}
                />
            ))}
        </>
    )
}

export default ShortStop;