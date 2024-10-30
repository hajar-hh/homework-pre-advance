import { ADD_TO_CART } from "./action";

const initialState = {
  cart: [],
  totalPrice: 0,
};

const cardRe = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newCard = [...state.cart, action.payload];
      let newTotalPrice = 0;
      newCard.forEach((item) => {
        newTotalPrice += parseFloat(item.price);
      });
      return { ...state, cart: newCard, totalPrice: newTotalPrice };

    default:
      return state;
  }
};

export default cardRe;
