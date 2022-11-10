import { configureStore } from '@reduxjs/toolkit'
import counterSliceTuXi from './slice/counterSliceTuXi'
// import {increment} from './slice/counterSlice'
export const store = configureStore({
    reducer: { counter: counterSliceTuXi },

})