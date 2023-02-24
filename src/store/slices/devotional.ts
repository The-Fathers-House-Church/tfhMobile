import { sendCatchFeedback } from '../../functions/feedback';
import { appAxios } from '../../api/axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseType, DevotionalType } from '../../types/types';

// Define the initial state using that type
const initialState: {
  devotionals: DevotionalType[] | undefined;
  totalResults: number;
  loading: boolean;
} = {
  devotionals: undefined,
  totalResults: 0,
  loading: false,
};

// Actual Slice
export const devotionalSlice = createSlice({
  name: 'devotionals',
  initialState,
  reducers: {
    setDevotionals(state, action: PayloadAction<ResponseType>) {
      state.devotionals = action.payload.results;
      state.totalResults = action.payload.pagination.totalResults;
    },
    setDevotionalLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setDevotionalLoading, setDevotionals } = devotionalSlice.actions;

export default devotionalSlice.reducer;
