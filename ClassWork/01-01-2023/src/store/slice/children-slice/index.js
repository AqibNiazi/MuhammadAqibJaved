import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: [],
};

export const slice = createSlice({
    name: "Children",
    initialState,
    reducers: {},
});

//export const { increment, decrement, } = childrenSlice.actions

export default slice.reducer;
