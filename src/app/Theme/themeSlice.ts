import { createSlice } from '@reduxjs/toolkit';
import { PaletteMode } from '@mui/material';

interface ThemeStateType {
    mode: PaletteMode;
}

const initialState: ThemeStateType = {
    mode: 'light',
};

const { actions, reducer } = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === 'dark' ? 'light' : 'dark';
        },
    },
});

export const { toggleTheme } = actions;

export default reducer;
