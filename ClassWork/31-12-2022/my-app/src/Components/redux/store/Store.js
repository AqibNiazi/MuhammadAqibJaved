import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../../reduxSlices/counter/counterSlices'
import formReducer from '../../reduxSlices/Form/FormSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    form:formReducer
  },
})