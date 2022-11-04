import { configureStore } from '@reduxjs/toolkit'
import counterSliceNew1 from './slice/ counterSliceNew1'
// import {increment} from './slice/counterSlice'
export const store = configureStore({
    reducer: { counter: counterSliceNew1 },

})