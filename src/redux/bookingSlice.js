import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPackage: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,

  reducers: {
    selectPackage: (state, action) => {
      state.selectedPackage = action.payload;
    },

    clearPackage: (state) => {
      state.selectedPackage = null;
    },
  },
});

export const { selectPackage, clearPackage } = bookingSlice.actions;

export default bookingSlice.reducer;