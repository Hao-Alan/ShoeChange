import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    gioHang: [],
}
export const counterSliceNew = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        themGioHang: (state, action) => {
            const newGioHang = state.gioHang
            const index = newGioHang.findIndex(item => item.maSP === action.payload.maSP)
            if (index !== -1) {
                state.gioHang[index].quantity += 1
            } else {
                const addedItem = { ...action.payload, quantity: 1 }
                state.gioHang = [...state.gioHang, addedItem]
                console.log(state.gioHang);

            }

        },
        xoaSanPham: (state, action) => {
            const newGioHang = state.gioHang
            const index = newGioHang.findIndex(item => item.maSP === action.payload.maSP)
            if (index !== -1) {
                state.gioHang.splice(index, 1)
            }
        },
        tangSoLuong: (state, action) => {
            const newGioHang = state.gioHang
            const index = newGioHang.findIndex(item => item.maSP === action.payload.maSP)
            if (index !== -1) {
                state.gioHang[index].quantity += 1
            }
        },
        giamSoLuong: (state, action) => {
            const newGioHang = state.gioHang
            const index = newGioHang.findIndex(item => item.maSP === action.payload.maSP)
            if (index !== -1) {
                if (state.gioHang[index].quantity <= 1) {
                    alert("so luong nho nhat la 1")
                }
                state.gioHang[index].quantity -= 1
            }
        },
    }
})

// Action creators are generated for each case reducer function
export const { themGioHang, xoaSanPham, tangSoLuong, giamSoLuong } = counterSliceNew.actions

export default counterSliceNew.reducer