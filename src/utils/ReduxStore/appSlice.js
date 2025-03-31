import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        darkMode: true,
        personalPortfolio: true
    },
    reducers: {
        toggleDarkMode: (state, action) => {
            state.darkMode = !state.darkMode;
        },
        updateDarkMode: (state, action) => {
            state.darkMode = action.payload;
        },
        updatePersonalPortfolio: (state, action)=>{
            state.personalPortfolio = action.payload;
        }
    }
});

export default appSlice.reducer;

export const { toggleDarkMode, updateDarkMode } = appSlice.actions;