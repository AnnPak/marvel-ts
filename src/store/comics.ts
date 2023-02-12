import { API_BASE, API_KEY } from "../utils/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request } from "../utils/request";
import { TInitialComicsState } from "../utils/types";

const initialState: TInitialComicsState = {
  fetchComicsLoading: false,
  fetchComicsError: false,

  heroComics: [],
};

export const fetchComics = createAsyncThunk(
  "comics/fetchComics",
  async (heroId: number) => {
    const requestUrl = `${API_BASE}characters/${heroId}/comics?${API_KEY}`;
    return await request({ method: "GET", url: requestUrl });
  }
);

const comicsSlice = createSlice({
  name: "comics",
  initialState,
  reducers: {},
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
      });
  },
});

const { actions, reducer } = comicsSlice;

export default reducer;
