import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const initialState = {
  jobs: data,
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
  },
});

export const { setJobs } = jobSlice.actions;
export default jobSlice.reducer;
