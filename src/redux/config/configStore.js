import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from "../modules/commentSlice";

const store = configureStore({
  reducer: {
    comments: commentsReducer,
  },
});

export default store;
