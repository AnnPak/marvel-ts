import { API_BASE, API_KEY } from "../utils/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request } from "../utils/request";
import { TInitialMediaState } from "../utils/types";

const initialState: TInitialMediaState = {
  fetchComicsLoading: false,
  fetchComicsError: false,

  fetchSeriesLoading: false,
  fetchSeriesError: false,

  getMediaItemLoading: false,
  getMediaItemError: false,

  heroSeries: [],
  heroComics: [],

  modalComics: [],
  modalSeries: [],
};

export const fetchComics = createAsyncThunk(
  "media/fetchComics",
  async (heroId: number) => {
    const requestUrl = `${API_BASE}characters/${heroId}/comics?${API_KEY}`;
    return await request({ method: "GET", url: requestUrl });
  }
);

export const fetchHeroSeries = createAsyncThunk(
  "media/fetchHeroSeries",
  async (heroId: number) => {
    const requestUrl = `${API_BASE}characters/${heroId}/series?${API_KEY}`;
    return await request({ method: "GET", url: requestUrl });
  }
);

export const getMediaItem = createAsyncThunk(
  "media/getMediaItem",
  async (props: { mediaId: number; mediaType: "comics" | "series" }) => {
    const { mediaId, mediaType } = props;
    const requestUrl = `${API_BASE}${mediaType}/${mediaId}?${API_KEY}`;
    return await request({ method: "GET", url: requestUrl });
  }
);

const comicsSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    deleteModalElement: (state) => {
      state.modalComics = [];
      state.modalSeries = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComics.pending, (state) => {
        state.fetchComicsLoading = true;
        state.fetchComicsError = false;
        state.heroComics = [];
      })
      .addCase(fetchComics.fulfilled, (state, action) => {
        state.fetchComicsLoading = false;
        state.fetchComicsError = false;

        state.heroComics = action.payload.data.results;
      })
      .addCase(fetchComics.rejected, (state) => {
        state.fetchComicsLoading = false;
        state.fetchComicsError = true;
      })

      .addCase(fetchHeroSeries.pending, (state) => {
        state.fetchSeriesLoading = true;
        state.fetchSeriesError = false;
        state.heroSeries = [];
      })
      .addCase(fetchHeroSeries.fulfilled, (state, action) => {
        state.fetchSeriesLoading = false;
        state.fetchSeriesError = false;
        state.heroSeries = action.payload.data.results;
      })
      .addCase(fetchHeroSeries.rejected, (state) => {
        state.fetchSeriesLoading = false;
        state.fetchSeriesError = false;
      })

      .addCase(getMediaItem.pending, (state) => {
        state.getMediaItemLoading = true;
        state.getMediaItemError = false;
      })
      .addCase(getMediaItem.fulfilled, (state, action) => {
        state.getMediaItemLoading = false;
        state.getMediaItemError = false;

        const mediaType = action.meta.arg.mediaType;
        const type = {
          type: action.meta.arg.mediaType,
        };

        const mediaDate = action.payload.data.results[0];

        if (mediaType === "comics") {
          state.modalComics = [Object.assign(mediaDate, type)];
        } else if (mediaType === "series") {
          state.modalSeries = [Object.assign(mediaDate, type)];
        }
      })
      .addCase(getMediaItem.rejected, (state) => {
        state.getMediaItemLoading = false;
        state.getMediaItemError = true;
      });
  },
});

const { actions, reducer } = comicsSlice;
export const { deleteModalElement } = actions;

export default reducer;
