import { TInitialHeroState } from "../utils/types";
import { API_KEY, BASE_OFFSET, BASE_LIMIT } from "../utils/constants";
import { API_BASE } from "../utils/constants";
import { request } from "../utils/request";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: TInitialHeroState = {
  fetchHeroesLoading: false,
  fetchHeroesError: false,

  showMoreHeroesLoading: false,
  showMoreHeroesSucces: false,
  showMoreHeroesError: false,

  fetchHeroLoading: false,
  fetchHeroError: false,

  currentOffset: BASE_OFFSET,
  hero: null,
  heroes: null,
};

export const fetchHeroes = createAsyncThunk("heroes/fetchHeroes", async () => {
  const requestUrl = `${API_BASE}characters?limit=${BASE_LIMIT}&offset=${BASE_OFFSET}&${API_KEY}`;
  return await request({ method: "GET", url: requestUrl });
});

export const showMoreHeroes = createAsyncThunk(
  "heroes/showMoreHeroes",
  async (currentOffset: number) => {
    const requestUrl = `${API_BASE}characters?limit=${BASE_LIMIT}&offset=${
      currentOffset + BASE_LIMIT
    }&${API_KEY}`;

    return await request({ method: "GET", url: requestUrl });
  }
);

export const fetchHero = createAsyncThunk(
  "heroes/fetchHero",
  async (id?: number) => {
    let charId = null;
    id
      ? (charId = id)
      : (charId = Math.floor(Math.random() * (1011400 - 1011000)) + 1011000);
    const requestUrl = `${API_BASE}characters/${charId}?${API_KEY}`;

    return await request({ method: "GET", url: requestUrl });
  }
);

const heroSlice = createSlice({
  name: "heroes",
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

        state.currentOffset = state.currentOffset + BASE_LIMIT;
      })
      .addCase(fetchHeroes.rejected, (state) => {
        state.fetchHeroesLoading = false;
        state.fetchHeroesError = true;
      })

      .addCase(showMoreHeroes.pending, (state) => {
        state.showMoreHeroesLoading = true;
        state.showMoreHeroesError = false;
        state.showMoreHeroesSucces = false;
      })
      .addCase(showMoreHeroes.fulfilled, (state, action) => {
        state.showMoreHeroesLoading = false;
        state.showMoreHeroesError = false;
        state.showMoreHeroesSucces = true;

        state.heroes = state.heroes
          ? [...state.heroes, ...action.payload.data.results]
          : state.heroes;
        state.currentOffset = state.currentOffset + BASE_LIMIT;
      })
      .addCase(showMoreHeroes.rejected, (state) => {
        state.showMoreHeroesLoading = false;
        state.showMoreHeroesError = true;
        state.showMoreHeroesSucces = false;
      })

      .addCase(fetchHero.pending, (state) => {
        state.fetchHeroLoading = true;
        state.fetchHeroError = false;
      })

      .addCase(fetchHero.fulfilled, (state, action) => {
        state.fetchHeroLoading = false;
        state.fetchHeroError = false;
        state.hero = [...action.payload.data.results];
      })

      .addCase(fetchHero.rejected, (state) => {
        state.fetchHeroLoading = false;
        state.fetchHeroError = true;
      });
  },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { actions, reducer } = heroSlice;

export default reducer;
