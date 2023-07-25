import { createSlice, createSelector } from '@reduxjs/toolkit';
import { getPlayerData } from '../api/jsondata';

const initialState = {
    playerData: [],
    error: false,
    isLoading: false
};

const draftBoardSlice = createSlice({
    name: 'draftBoard',
    initialState,
    reducers: {
        startGetPlayerData(state) {
            state.isLoading = true;
            state.error = false;
        },
        getPlayerDataSuccess(state, action) {
            state.isLoading = false;
            state.playerData = action.payload;
        },
        getPlayerDataFailed(state) {
            state.isLoading = false;
            state.error = true;
        }
    }
});

export const {
    startGetPosts,
    getPlayerDataSuccess,
    getPlayerDataFailed
} = draftBoardSlice.actions;

export default draftBoardSlice.reducer;

export const fetchPlayerData = () => async (dispatch) => {
    try {
        dispatch(startGetPlayerData());
        const playerData = await getPlayerData();

        dispatch(getPlayerDataSuccess(playerData));
    } catch (error) {
        dispatch(getPlayerDataFailed());
    }
};