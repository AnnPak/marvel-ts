import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

const heroSlice = createSlice({
  name: 'RootReducer',
  initialState,
  reducers: {

  }
}
)

const { actions, reducer } = heroSlice;

export default reducer;