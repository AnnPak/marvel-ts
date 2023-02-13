import { TInitialSeriesState } from "./../utils/types";
import { API_KEY } from "./../utils/constants";
import { API_BASE } from "../utils/constants";
import { request } from "./../utils/request";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: TInitialSeriesState = {
  fetchSeriesLoading: false,
  fetchSeriesError: false,

  heroSeries: [],
};

export const fetchHeroSeries = createAsyncThunk(
  "series/fetchHeroSeries",
  async (heroId: number) => {
    const requestUrl = `${API_BASE}characters/${heroId}/series?${API_KEY}`;
    return await request({ method: "GET", url: requestUrl });
  }
);

const seriesSlice = createSlice({
  name: "series",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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

const { actions, reducer } = seriesSlice;

export default reducer;
