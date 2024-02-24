import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const initialState = {
  cars: {
    items: [],
    favorites: [],
    isLoading: false,
    error: null,
  },
  filter: "",
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    // setCars(state, action) {
    //   state.cars.items = action.payload.items;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.cars.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars.isLoading = false;
        state.cars.error = null;
        // state.cars.items = action.payload;
        state.cars.items = [...state.cars.items, ...action.payload];
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.cars.isLoading = false;
        state.cars.error = action.payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
export const { setFilter } = carsSlice.actions;
