import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    '': {
        initialValue: 0,
        name: '',
    }
};

const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        initState: (state, action) => {
            return action.payload;
        },
        incrementScore: (state, action) => {
            if (state[action.payload]) {
                state[action.payload].initialValue += 1;
            }
        },
    }
});

const { actions: { incrementScore, initState }, reducer } = scoreSlice;

export {
    incrementScore,
    initState
};

export default reducer;
