import { sendCatchFeedback } from '../../functions/feedback';
import { appAxios } from '../../api/axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnnouncementType, ResponseType } from '../../types/types';

// Define the initial state using that type
const initialState: {
  announcements: AnnouncementType[] | undefined;
  loading: boolean;
  totalResults: number;
} = {
  announcements: undefined,
  loading: false,
  totalResults: 0,
};

// Actual Slice
export const announcementSlice = createSlice({
  name: 'announcements',
  initialState,
  reducers: {
    setAnnouncementLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getAnnouncements.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      getAnnouncements.fulfilled,
      (state, action: PayloadAction<ResponseType>) => {
        state.announcements = action.payload.results;
        state.totalResults = action.payload.pagination.totalResults;
        state.loading = false;
      },
    );
    builder.addCase(getAnnouncements.rejected, state => {
      state.loading = false;
    });
  },
});

export const getAnnouncements = createAsyncThunk(
  'announcements/getAnnouncements',
  async (page?: number) => {
    try {
      const response = await appAxios.get(`/announcement?page=${page || 1}`);
      return response.data.data;
    } catch (error) {
      sendCatchFeedback(error);
    }
  },
);

export const { setAnnouncementLoading } = announcementSlice.actions;

export default announcementSlice.reducer;
