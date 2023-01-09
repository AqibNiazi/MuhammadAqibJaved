import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    dataFunction: (state, action) => {
      const newArr = [...state.formData];
      newArr.push(action.payload);
      state.formData = newArr;
      console.log(action.payload);
      return state;
    },
  },
});

export default formSlice.reducer;
