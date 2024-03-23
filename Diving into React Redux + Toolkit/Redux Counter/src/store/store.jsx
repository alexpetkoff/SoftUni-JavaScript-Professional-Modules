import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counterSlice";
import authSlice from "./authSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    },
});

export default store;

// BELOW IS THE CODE FOR OLD WAY OF USING REDUX

// const counterReducer = (state = initialState, action) => {
//     if (action.type === "increment") {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter,
//         };
//     }

//     if (action.type === "increase") {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter,
//         };
//     }

//     if (action.type === "decrement") {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter,
//         };
//     }

//     if (action.type === "reset") {
//         return {
//             counter: 0,
//             showCounter: state.showCounter,
//         };
//     }

//     if (action.type === "toggle") {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter,
//         };
//     }

//     return state;
// };
