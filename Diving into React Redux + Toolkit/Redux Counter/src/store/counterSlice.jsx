import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        reset(state) {
            state.counter = 0;
        },
        toggleCounter(state, action) {
            state.showCounter = !state.showCounter;
        },
    },
});

export const counterActions = counterSlice.actions;

export default counterSlice;
