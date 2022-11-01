import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'

const initialState = {
    // quantity: 0,
    ListAddedPhone: [

    ],


}
// console.log(quantityx)
export const counterSlice = createSlice({
    name: 'counter2',
    initialState,
    reducers: {
        addProduct: (state, actions) => {
            const currentList = state.ListAddedPhone
            const index = currentList.findIndex(item => item.maSP === actions.payload.maSP)
            if (index !== -1) {
                currentList[index].quantityx += 1

            }
            else {
                const addedItem = {
                    ...actions.payload, quantityx: 1
                }
                state.ListAddedPhone = [...state.ListAddedPhone, addedItem]
            }
        },

        xoaGioHang: (state, action) => {
            const listCapNhat = state.ListAddedPhone
            const index = listCapNhat.findIndex(item => item.maSP === action.payload.maSP)
            if (index !== -1) {
                // if (listCapNhat[index].quantityx < 1) {
                //     return alert("so luong khong duoc nho hon 1")
                // }
                state.ListAddedPhone.splice(index, 1)
            }

        },

        GiamSoLuong: (state, action) => {
            const listCapNhat = state.ListAddedPhone
            const index = listCapNhat.findIndex(item => item.maSP === action.payload.maSP)
            if (index !== -1) {
                if (state.ListAddedPhone[index].quantityx < 1) {
                    alert("gia tri khong duoc nho hon 1")
                    return
                }
                state.ListAddedPhone[index].quantityx += -1
            }
        },
        TangSoLuong: (state, action) => {
            const listCapNhat = state.ListAddedPhone
            const index = listCapNhat.findIndex(item => item.maSP === action.payload.maSP)
            if (index !== -1) {
                state.ListAddedPhone[index].quantityx += 1
            }
        }

    },
})

// Action creators are generated for each case reducer function

export const { increment, decrement, addProduct, xoaGioHang, tongSoLuong, GiamSoLuong, TangSoLuong } = counterSlice.actions

export default counterSlice.reducer
