import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
  name: "comment",
  initialState: {
    comment: [],
  },
  reducers: {
    __getComments: (state, action) => {
      state.comment = action.payload;
    },
    __createComment: (state, action) => {
      state.comment = [...state.comment, action.payload];
    },
    __deleteComment: (state, action) => {
      state.comment = state.comment.filter(
        (item) => item.id !== action.payload,
      );
    },
    __updateComment: (state, action) => {
      state.comment = state.comment.map((item) =>
        item.id === action.payload.id ? action.payload : item,
      );
    },
  },
});

export const {
  __getComments,
  __createComment,
  __deleteComment,
  __updateComment,
} = commentsSlice.actions;

export default commentsSlice.reducer;
