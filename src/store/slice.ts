import { TInitialState } from './../utils/types';
import { API_KEY, BASE_OFFSET } from './../utils/constants';
import { API_BASE } from '../utils/constants';
import { request } from './../utils/request';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: TInitialState = {
  fetchHeroesLoading: false,
  fetchHeroesError: false,
  heroes: null,
}

export const fetchHeroes = createAsyncThunk('heroes/fetchHeroes', async () => {
  const requestUrl = `${API_BASE}characters?limit=10&offset=${BASE_OFFSET}&${API_KEY}`
  console.log("kek2");
  return await request({ method: 'GET', url: requestUrl, })
})

const heroSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeroes.pending, (state) => {
        state.fetchHeroesLoading = true;
        state.fetchHeroesError = false;
      })
      .addCase(fetchHeroes.fulfilled, (state, action) => {
        state.fetchHeroesLoading = false;
        state.fetchHeroesError = false;
        state.heroes = action.payload.data.results;
      })
      .addCase(fetchHeroes.rejected, (state) => {
        state.fetchHeroesLoading = false;
        state.fetchHeroesError = true;

      })
  }
}
)

const { actions, reducer } = heroSlice;

export default reducer;