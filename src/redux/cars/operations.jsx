import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "../../services/apiService";

axios.defaults.baseURL = URL;

export const fetchCars = createAsyncThunk("cars", async (_, thunkAPI) => {
  try {
    const fetchedCard = await axios.get();

    console.log(fetchedCard);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
