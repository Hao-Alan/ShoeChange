import { configureStore } from '@reduxjs/toolkit'
import counterSliceVeXemPhim from './slice/counterSliceVeXemPhim.js'
// import {increment} from './slice/counterSlice'
export const store = configureStore({
    reducer: { counter: counterSliceVeXemPhim },

})