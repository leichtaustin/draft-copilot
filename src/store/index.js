import { configureStore, combineReducers } from '@reduxjs/toolkit';
import draftBoardReducer from './draftBoardSlice.js';

export default configureStore({
    reducer: combineReducers({
        draftBoard: draftBoardReducer
    }),
})