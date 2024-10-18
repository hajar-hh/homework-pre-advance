"The store is like a central hub that keeps track of everything in your application’s state. It combines all the reducers that define how the state changes and can use extra tools called middleware. The store also lets you send actions to change the state and listen for any updates."


const { createStore } = require("redux"); 
const multiplyReducer = require("./reducer");
const { multiplyNumbers } = require("./actionCreator"); 

const store = createStore(multiplyReducer);

console.log(store.getState()); // { result: 1 }

store.dispatch(multiplyNumbers(5, 3));

console.log(store.getState()); // { result: 15 }
