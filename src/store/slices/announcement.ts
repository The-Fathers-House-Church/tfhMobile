import { sendCatchFeedback } from '../../functions/feedback';
import { appAxios } from '../../api/axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnnouncementType } from '../../types/types';

// Define the initial state using that type
const initialState: {
  announcements: AnnouncementType[] | undefined;
  loading: boolean;
} = {
  announcements: undefined,
  loading: false,
};

// Actual Slice
export const announcementSlice = createSlice({
  name: 'announcements',
  initialState,
  reducers: {
    setAnnouncements(
      state,
      action: PayloadAction<{ announcements: AnnouncementType[] }>,
    ) {
      state.announcements = action.payload.announcements;
    },
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
      (state, action: PayloadAction<AnnouncementType[]>) => {
        state.announcements = action.payload;
        state.loading = false;
      },
    );
    builder.addCase(getAnnouncements.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const getAnnouncements = createAsyncThunk(
  'announcements/getAnnouncements',
  async () => {
    try {
      const response = await appAxios.get('/announcement');
      return response.data.data.results;
    } catch (error) {
      sendCatchFeedback(error);
    }
  },
);

export const { setAnnouncementLoading } = announcementSlice.actions;

export default announcementSlice.reducer;
