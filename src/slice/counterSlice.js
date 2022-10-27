import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'

const initialState = {
    quantity: 0,
    ListAddedPhone: [

    ],
    flag: false,

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
        }

    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, addProduct } = counterSlice.actions

export default counterSlice.reducer