import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    gheDangDat: []
}

export const counterSliceVeXemPhim = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based o ff those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        themGheDangDat: (state, action) => {
            let tempArray = state.gheDangDat
            let index = tempArray.findIndex(item => item.soGhe === action.payload.soGhe)

            if (index !== -1) {
                state.gheDangDat.splice(index, 1)
            } else {
                state.gheDangDat = [...state.gheDangDat, action.payload]
            }
        },
        xoaGheDangDat: (state, action) => {
            let tempArray = state.gheDangDat
            let index = tempArray.findIndex(item => item.soGhe === action.payload.soGhe)

            if (index !== -1) {
                state.gheDangDat.splice(index, 1)
            }
            state.gheDangDat = state.gheDangDat
        },

    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, themGheDangDat, xoaGheDangDat } = counterSliceVeXemPhim.actions

export default counterSliceVeXemPhim.reducer