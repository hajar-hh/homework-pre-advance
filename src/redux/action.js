export const DECREMENT_NUMBER = "DECREMENT/NUMBER";
export const INCREMENT_NUMBER = "INCREMENT/NUMBER";
export const RESET_NUMBER = "RESET/NUMBER";

export const decrement = () => {
  return {
    type: DECREMENT_NUMBER,
  };
};

export const increment = () => {
  return {
    type: INCREMENT_NUMBER,
  };
};

export const reset = () => {
  return {
    type: RESET_NUMBER,
  };
};
