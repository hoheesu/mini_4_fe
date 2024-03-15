import { configureStore } from "@reduxjs/toolkit";
import votesSlice from "../modules/voteSlice";


const store = configureStore({
    reducer: {
        votesReducer: votesSlice
    }
});

export default store;