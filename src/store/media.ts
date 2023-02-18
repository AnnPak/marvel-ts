import { API_BASE, API_KEY } from "../utils/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request } from "../utils/request";
import { TInitialMediaState } from "../utils/types";

const initialState: TInitialMediaState = {
  fetchComicsLoading: false,
  fetchComicsError: false,

  fetchSeriesLoading: false,
  fetchSeriesError: false,

  heroSeries: [],
  heroComics: [],

  modalItem: [],
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

const comicsSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    addElementToModal: (state, action) => {
      state.modalItem = [action.payload];
    },
    deleteModalElement: (state) => {
      state.modalItem = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComics.pending, (state) => {
        state.fetchComicsLoading = true;
        state.fetchComicsError = false;
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
        state.fetchSeriesLoading = false;
        state.fetchSeriesError = false;
      })
      .addCase(fetchHeroSeries.fulfilled, (state, action) => {
        state.fetchSeriesLoading = false;
        state.fetchSeriesError = false;
        state.heroSeries = action.payload.data.results;
      })
      .addCase(fetchHeroSeries.rejected, (state) => {
        state.fetchSeriesLoading = false;
        state.fetchSeriesError = false;
      });
  },
});

const { actions, reducer } = comicsSlice;
export const { addElementToModal, deleteModalElement } = actions;

export default reducer;
