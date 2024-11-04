import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addFilter: (state, action) => {
      if (!state.filters.includes(action.payload)) {
        state.filters.push(action.payload);
      }
    },
    removeFilter: (state, action) => {
      state.filters = state.filters.filter(
        (filter) => filter !== action.payload
      );
    },
    clearFilters: (state) => {
      state.filters = [];
    },
  },
});

export const { addFilter, removeFilter, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;
