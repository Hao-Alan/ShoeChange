import { configureStore } from '@reduxjs/toolkit'
import counterSliceXucXac from './slice/counterSliceXucXac'
// import {increment} from './slice/counterSlice'
export const store = configureStore({
    reducer: { counter: counterSliceXucXac },

})