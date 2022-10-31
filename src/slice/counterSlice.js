import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'

const initialState = {
    quantity: 0,
    ListAddedPhone: [

    ],
    flag: false,
    tong: 0

}

export const counterSlice = createSlice({
    name: 'counter2',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.quantity += 1
        },
        decrement: (state) => {
            state.quantity -= 1
        },
        // tongSoLuong: (state) => {
        //     const tongtinh = state.ListAddedPhone.reduce((tongxx, item, index) => {
        //         return tongxx += item.quantityx
        //     }, 0)
        //     state.tong = tongtinh
        // },

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
                if (listCapNhat[index].quantityx < 1) {
                    return alert("so luong khong duoc nho hon 1")
                }
                state.ListAddedPhone.splice(index, 1)
            }

        }

    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, addProduct, xoaGioHang, tongSoLuong } = counterSlice.actions

export default counterSlice.reducer
// export default counterSlice.name
