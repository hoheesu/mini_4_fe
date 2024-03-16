import { configureStore } from "@reduxjs/toolkit";
import votesReducer from "../modules/voteSlice";
import commentsReducer from "../modules/commentSlice";

const store = configureStore({
  reducer: {
    votes: votesReducer,
    comments: commentsReducer,
  },
});

export default store;
