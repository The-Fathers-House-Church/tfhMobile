import { YoutubeVideoType } from './../../types/types';
import { sendCatchFeedback } from '../../functions/feedback';
import { appAxios } from '../../api/axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state using that type
const initialState: {
  videos: YoutubeVideoType[] | undefined;
  loading: boolean;
  totalResults: number;
} = {
  videos: undefined,
  loading: false,
  totalResults: 0,
};

// Actual Slice
export const youtubeVideoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    setVideos(
      state,
      action: PayloadAction<{
        videos: YoutubeVideoType[];
        nextPageToken: string;
        prevPageToken: string;
      }>,
    ) {
      state.videos = action.payload.videos;
    },
    setVideoLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setVideoLoading, setVideos } = youtubeVideoSlice.actions;

export default youtubeVideoSlice.reducer;
