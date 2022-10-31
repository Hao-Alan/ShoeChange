import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slice/counterSlice'
// import {increment} from './slice/counterSlice'
export const store = configureStore({
    reducer: { counterSlicex: counterSlice },

})