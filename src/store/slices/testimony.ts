import { sendCatchFeedback } from '../../functions/feedback';
import { appAxios } from '../../api/axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TestimonyType } from '../../types/types';

// Define the initial state using that type
const initialState: {
  testimonies: TestimonyType[] | undefined;
  loading: boolean;
} = {
  testimonies: undefined,
  loading: false,
};

// Actual Slice
export const testimonySlice = createSlice({
  name: 'testimonies',
  initialState,
  reducers: {
    setTestimonies(
      state,
      action: PayloadAction<{ testimonies: TestimonyType[] }>,
    ) {
      state.testimonies = action.payload.testimonies;
    },
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
      (state, action: PayloadAction<TestimonyType[]>) => {
        state.testimonies = action.payload;
        state.loading = false;
      },
    );
    builder.addCase(getTestimonies.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const getTestimonies = createAsyncThunk(
  'testimonies/getTestimonies',
  async () => {
    try {
      const response = await appAxios.post('/testimony/approved');
      return response.data.data.results;
    } catch (error) {
      sendCatchFeedback(error);
    }
  },
);

export const { setTestimonyLoading } = testimonySlice.actions;

export default testimonySlice.reducer;
