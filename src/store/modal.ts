import { createSlice } from "@reduxjs/toolkit";

const initialState: { isModalShow: boolean } = {
  isModalShow: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state) => {
      state.isModalShow = true;
    },
    hideModal: (state) => {
      state.isModalShow = false;
    },
  },
});

const { actions, reducer } = modalSlice;
export const { showModal, hideModal } = actions;

export default reducer;
