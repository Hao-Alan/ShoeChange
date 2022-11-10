import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mangDuLieu: [{
        tenAction: "keo", hinhAnh: "./img/BaiTapTuXi/keo.png", maTuXi: 1,
        border: false,
        // border: { border: '5px solid orange' }
    },
    {
        tenAction: "bua", hinhAnh: "./img/BaiTapTuXi/bua.png", maTuXi: 2, border: false,
    },
    {
        tenAction: "bao", hinhAnh: "./img/BaiTapTuXi/bao.png", maTuXi: 3, border: false,
    },
    ],
    mangPlayer: { tenAction: "bao", hinhAnh: "./img/BaiTapTuXi/bao.png", maTuXi: 3, },
    mangComputer: { tenAction: "bao", hinhAnh: "./img/BaiTapTuXi/bao.png", maTuXi: 3 },
    content: "bạn thua rồi!!",
    soBanThang: 0,
    tongSoBan: 0


}

export const counterSliceTuXi = createSlice({

    name: 'counter',
    initialState,
    reducers: {
        thayPlayerAction: (state, action) => {
            const mangTamThoi = [...state.mangDuLieu]
            const index = mangTamThoi.findIndex((item => item.tenAction === action.payload))
            if (index !== -1) {
                const selectOject = { ...state.mangDuLieu[index] }
                state.mangPlayer = selectOject
            }
        },
        thayComputerAction: (state) => {
            const mangTamThoi = [...state.mangDuLieu]
            const randomNum = Math.floor(Math.random() * 3 + 1)
            console.log(randomNum);
            const index = mangTamThoi.findIndex((item => item.maTuXi === randomNum))
            if (index !== -1) {
                const selectOject = { ...state.mangDuLieu[index] }
                state.mangComputer = selectOject

            }
        },
        thayContent: (state) => {

            const player = state.mangPlayer
            const computer = state.mangComputer
            //Case keo
            if ((player.tenAction === "keo") && (computer.tenAction === "keo")) {
                state.content = "bạn hòa rồi!!!!"
            } else if ((player.tenAction === "keo") && (computer.tenAction === "bua")) {
                state.content = "bạn thua sml!!"
            } else if ((player.tenAction === "keo") && (computer.tenAction === "bao")) {
                state.soBanThang += 1
                state.content = "bạn thắng đậm !!"
            }

            //Case bua
            else if ((player.tenAction === "bua") && (computer.tenAction === "keo")) {
                state.soBanThang += 1
                state.content = "bạn thắng đậm !!"
            } else if ((player.tenAction === "bua") && (computer.tenAction === "bua")) {
                state.content = "bạn hòa rồi!!!!"

            } else if ((player.tenAction === "bua") && (computer.tenAction === "bao")) {
                state.content = "bạn thua sml!!"
            }
            //Case bao
            else if ((player.tenAction === "bao") && (computer.tenAction === "keo")) {
                state.content = "bạn thua sml!!"
            } else if ((player.tenAction === "bao") && (computer.tenAction === "bua")) {
                state.soBanThang += 1
                state.content = "bạn thắng đậm !!"

            } else if ((player.tenAction === "bao") && (computer.tenAction === "bao")) {
                state.content = "bạn hòa rồi!!!!"
            }
            state.tongSoBan += 1

        },
    }
})

// Action creators are generated for each case reducer function
export const { thayPlayerAction, thayComputerAction, thayContent } = counterSliceTuXi.actions

export default counterSliceTuXi.reducer