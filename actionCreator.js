const { MULTIPLY } = require("./action");

function multiplyNumbers(num1, num2) {
  return {
    type: MULTIPLY,
    payload: {
      num1,
      num2,
    },
  };
}

module.exports = { multiplyNumbers }; 




  "An action creator is just a function that makes an action for us. Instead of writing the action object ourselves every time, we use this function to create it easily whenever needed."



