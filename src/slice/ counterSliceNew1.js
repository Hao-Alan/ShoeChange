import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    gioHang: [],
}

export const counterSliceNew1 = createSlice({
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
        themVaoGio: (state, action) => {
            const gioHangCapNhat = state.gioHang
            const index = gioHangCapNhat.findIndex(item => item.maSP === action.payload.maSP)
            if (index !== -1) {
                state.gioHang[index].soLuong += 1
            } else {
                const addedItem = { ...action.payload, soLuong: 1 }
                state.gioHang = [...state.gioHang, addedItem]
                console.log(state.gioHang)
            }
        },
        xoaGioHang: (state, action) => {
            const gioHangCapNhat = state.gioHang
            const index = gioHangCapNhat.findIndex(item => item.maSP === action.payload.maSP)
            if (index !== -1) {
                state.gioHang.splice(index, 1)
            }
        },
        tangSoLuong: (state, action) => {
            const gioHangCapNhat = state.gioHang
            const index = gioHangCapNhat.findIndex(item => item.maSP === action.payload.maSP)
            if (index !== -1) {
                state.gioHang[index].soLuong += 1
            }
        },
        giamSoLuong: (state, action) => {
            const gioHangCapNhat = state.gioHang
            const index = gioHangCapNhat.findIndex(item => item.maSP === action.payload.maSP)
            if (index !== -1) {
                if (state.gioHang[index].soLuong <= 1) {
                    alert("so luong phai lon hon 1")
                    return
                }
                state.gioHang[index].soLuong += -1
            }
        }
    }
}
)

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, themVaoGio, xoaGioHang, tangSoLuong, giamSoLuong } = counterSliceNew1.actions

export default counterSliceNew1.reducer