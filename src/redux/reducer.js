import { INCREMENT_NUMBER, DECREMENT_NUMBER, RESET_NUMBER } from "./action";

const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_NUMBER:
      return { ...state, count: state.count + 1 };
    case DECREMENT_NUMBER:
      return { ...state, count: state.count - 1 };
    case RESET_NUMBER:
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export default countReducer;
