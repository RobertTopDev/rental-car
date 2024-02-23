import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const initialState = {
  cars: {},
  isLoggedIn: false,
  isRefreshing: false,
};

const carsSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars = { ...action.payload };
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchCars.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const carReducer = carsSlice.reducer;
