import { appAxios } from './../../api/axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DevotionalType } from '../../types/types';

// Define the initial state using that type
const initialState: { devotionals: DevotionalType[] | []; loading: boolean } = {
  devotionals: [],
  loading: false,
};

// Actual Slice
export const devotionalSlice = createSlice({
  name: 'devotional',
  initialState,
  reducers: {
    setDevotionals(
      state,
      action: PayloadAction<{ devotionals: DevotionalType[] }>,
    ) {
      state.devotionals = action.payload.devotionals;
    },
    setDevotionalLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getDevotionals.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      getDevotionals.fulfilled,
      (state, action: PayloadAction<DevotionalType[]>) => {
        state.devotionals = action.payload;
        state.loading = false;
      },
    );
    builder.addCase(getDevotionals.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const getDevotionals = createAsyncThunk(
  'devotional/getDevotionals',
  async () => {
    try {
      const response = await appAxios.get('/devotional');
      return response.data.data.results;
    } catch (error: any) {
      console.log(error?.response?.data);
    }
  },
);

export const { setDevotionalLoading } = devotionalSlice.actions;

export default devotionalSlice.reducer;
