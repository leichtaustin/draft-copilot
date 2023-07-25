import React from 'react';
import PositionSection from '../../components/PositionSection/PositionSection';
import './DraftBoard.css';


export const DraftBoard = () => {
    const draftPositions = ['C', '1B', '2B', 'SS', '3B', 'OF']
    
    return (
        <div className='DraftBoard'>
            {draftPositions.map(position => (
                <PositionSection
                    position={position}
                />
            ))}
        </div>
    )
}