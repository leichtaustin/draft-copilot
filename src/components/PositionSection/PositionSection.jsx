import React from 'react';
import { sampleData } from '../../api/jsondata';
import PlayerCard from '../PlayerCard/PlayerCard';
import './PositionSection.css';

const PositionSection = (props) => {
    const { position } = props;
    const playerData = sampleData.filter(player => player.Position === position)
    
    return (
        <>
            <div className='PositionSection'>
                <h2>{position}</h2>
                {playerData.map(player => (
                    <PlayerCard
                        name = {player.Name}
                        hits = {player.Hits}
                    />
                ))}
            </div>
        </>
    )
}

export default PositionSection;