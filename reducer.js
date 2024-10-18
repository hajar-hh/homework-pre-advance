"A reducer is a pure function that takes the current state and an action as arguments and returns a new state. It defines how the state should change in response to specific actions."

const { MULTIPLY } = require("./action");

const initialState = { result: 1 };

function multiplyReducer(state = initialState, action) {
  switch (action.type) {
    case MULTIPLY:
      return {
        ...state,
        result: action.payload.num1 * action.payload.num2,
      };
    default:
      return state;
  }
}

module.exports = multiplyReducer; 
