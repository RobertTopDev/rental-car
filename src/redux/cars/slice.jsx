import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const initialState = {
  cars: {
    items: [],
    favorites: [],
    isLoading: false,
    error: null,
    total: 0,
    currentPage: 1,
    perPage: 12,
  },
  filter: {
    brand: "",
    price: "",
    mileageRange: { min: 0, max: 100000 },
  },
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    // setBrandFilter(state, action) {
    //   state.filter.brand = action.payload;
    // },
    // setPriceFilter(state, action) {
    //   state.filter.price = action.payload;
    // },
    // setMileageRangeFilter(state, action) {
    //   state.filter.mileageRange = action.payload;
    // },
    setBrandFilter(state, action) {
      state.filter.brand = action.payload;
    },
    setPriceFilter(state, action) {
      state.filter.price = action.payload;
    },
    setMileageRangeFilter(state, action) {
      state.filter.mileageRange = action.payload;
    },
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
      // .addCase(fetchCars.fulfilled, (state, action) => {
      //   state.cars.isLoading = false;
      //   state.cars.error = null;

      //   const { total, items, page } = action.payload;

      //   state.cars.total = total;
      //   state.cars.items = [...state.cars.items, ...items];
      //   state.cars.currentPage = page;
      // })
      .addCase(fetchCars.rejected, (state, action) => {
        state.cars.isLoading = false;
        state.cars.error = action.payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
export const { setBrandFilter, setPriceFilter, setMileageRangeFilter } =
  carsSlice.actions;
