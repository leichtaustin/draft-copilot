import React from 'react';
import PositionSection from '../../components/PositionSection/PositionSection';
import './DraftBoard.css';
import { fetchPlayerData } from '../../store/draftBoardSlice';
import { useDispatch, useSelector } from 'react-redux';


export const DraftBoard = () => {
    const draftPositions = ['C', '1B', '2B', 'SS', '3B', 'OF']
    const playerData = useSelector((state) => state.draftBoard);
    const { players, error, isLoading } = playerData;
    const dispatch = useDispatch();
    
    return (
        <div className='main'>
            <button 
                type='button'
                onClick={() => dispatch(fetchPlayerData())}>
                Get Player Data    
            </button>

            <div className='DraftBoard'>
                {draftPositions.map(position => (
                    <PositionSection
                        position={position}
                        players={players}
                    />
                ))}
            </div>
        </div>
    )
}