import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./jobSlice";
import filterReducer from "./filterSlice";

const store = configureStore({
  reducer: {
    jobs: jobSlice,
    filters: filterReducer,
  },
});

export default store;
