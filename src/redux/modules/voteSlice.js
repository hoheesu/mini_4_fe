import { createSlice } from '@reduxjs/toolkit';

const votesSlice = createSlice({
    name: 'votes',
    initialState: {
        votes: [],
        loading: true
    },
    reducers: {
        addVote: (state, action) => {
            state.todos = action.payload;
        },
    }
})


export default votesSlice.reducer;