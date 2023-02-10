import { devotionalSlice } from './slices/devotional';
import { configureStore } from '@reduxjs/toolkit';
import { todayDevotionalSlice } from './slices/todayDevotional';

export const store = configureStore({
  reducer: {
    [devotionalSlice.name]: devotionalSlice.reducer,
    [todayDevotionalSlice.name]: todayDevotionalSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
