import { sendCatchFeedback } from './../../functions/feedback';
import { appAxios } from './../../api/axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DevotionalType } from '../../types/types';

// Define the initial state using that type
const initialState: {
  todayDevotional: DevotionalType | undefined;
  loading: boolean;
} = {
  todayDevotional: undefined,
  loading: false,
};

// Actual Slice
export const todayDevotionalSlice = createSlice({
  name: 'todayDevotional',
  initialState,
  reducers: {
    setDevotionals(
      state,
      action: PayloadAction<{ todayDevotional: DevotionalType }>,
    ) {
      state.todayDevotional = action.payload.todayDevotional;
    },
    setDevotionalLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getDayDevotional.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      getDayDevotional.fulfilled,
      (state, action: PayloadAction<DevotionalType>) => {
        state.todayDevotional = action.payload;
        state.loading = false;
      },
    );
    builder.addCase(getDayDevotional.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const getDayDevotional = createAsyncThunk(
  'todayDevotional/getDayDevotional',
  async () => {
    try {
      const response = await appAxios.get('/devotional/today');
      return response.data.devotional;
    } catch (error) {
      sendCatchFeedback(error);
    }
  },
);

export const { setDevotionalLoading } = todayDevotionalSlice.actions;

export default todayDevotionalSlice.reducer;
