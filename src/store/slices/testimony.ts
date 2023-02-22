import { sendCatchFeedback } from '../../functions/feedback';
import { appAxios } from '../../api/axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseType, TestimonyType } from '../../types/types';

// Define the initial state using that type
const initialState: {
  testimonies: TestimonyType[] | undefined;
  totalResults: number;
  loading: boolean;
} = {
  testimonies: undefined,
  totalResults: 0,
  loading: false,
};

// Actual Slice
export const testimonySlice = createSlice({
  name: 'testimonies',
  initialState,
  reducers: {
    setTestimonyLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getTestimonies.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      getTestimonies.fulfilled,
      (state, action: PayloadAction<ResponseType>) => {
        state.testimonies = action.payload.results;
        state.totalResults = action.payload.pagination.totalResults;
        state.loading = false;
      },
    );
    builder.addCase(getTestimonies.rejected, state => {
      state.loading = false;
    });
  },
});

export const getTestimonies = createAsyncThunk(
  'testimonies/getTestimonies',
  async (page?: number) => {
    try {
      const response = await appAxios.post(
        `/testimony/approved?page=${page || 1}`,
      );
      return response.data.data;
    } catch (error) {
      sendCatchFeedback(error);
    }
  },
);

export const { setTestimonyLoading } = testimonySlice.actions;

export default testimonySlice.reducer;
