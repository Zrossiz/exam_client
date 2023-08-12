"use client";

import { configureStore } from "@reduxjs/toolkit";
import auth from "./AuthSlice/AuthSlice";
import question from "./QuestionSlice/QuestionSlice";

const store = configureStore({
  reducer: {
    auth,
    question,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
