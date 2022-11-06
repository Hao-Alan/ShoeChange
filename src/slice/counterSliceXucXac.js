import { createSlice } from '@reduxjs/toolkit'
import XucXac1 from '../'
const initialState = {
    xucXac: [{ maXucXac: 1, hinhAnh: "../img/imgXucXac/1.png" },
    { maXucXac: 1, hinhAnh: "../img/imgXucXac/1.png" },
    { maXucXac: 1, hinhAnh: "./img/imgXucXac/1.png" },
        ,
    ],
    xucXacStatus: false,
    banThang: 0,
    soBanChoi: 0,
    border: "border: solid 5px yellowgreen"
}

export const counterSliceXucXac = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        thayTrangThaiTaiXiu: (state, ation) => {
            state.xucXacStatus = ation.payload
        },
        playgame: (state) => {
            let ArrayXucXac = []
            for (let i = 0; i < 3; i++) {
                let xucXucNumber = Math.floor(Math.random() * 6) + 1;
                let xucXacObject = { maXucXac: xucXucNumber, hinhAnh: `../img/imgXucXac/${xucXucNumber}.png` }
                ArrayXucXac.push(xucXacObject)
                // console.log(ArrayXucXac);
            }
            state.xucXac = ArrayXucXac

            state.soBanChoi += 1

            let tongDiem = ArrayXucXac.reduce((tong, item, index) => {
                return tong += item.maXucXac
            }, 0)
            if ((tongDiem > 11 && state.xucXacStatus === true) || (tongDiem <= 11 && state.xucXacStatus === false)) {
                state.banThang += 1
            }
        },

    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, thayTrangThaiTaiXiu, playgame } = counterSliceXucXac.actions

export default counterSliceXucXac.reducer