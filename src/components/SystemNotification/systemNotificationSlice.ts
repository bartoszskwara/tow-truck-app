import { createSlice } from '@reduxjs/toolkit';
import { AlertColor } from '@mui/material';
import { TextProps } from '../Text/Text';

interface SystemNotificationStateType {
    open: boolean;
    textProps: TextProps | undefined;
    severity: AlertColor | undefined;
}

const initialState: SystemNotificationStateType = {
    open: false,
    textProps: undefined,
    severity: undefined,
};

const { actions, reducer } = createSlice({
    name: 'systemNotification',
    initialState,
    reducers: {
        openNotification: (state, { payload: { textProps, severity } }) => ({
            ...state,
            open: true,
            textProps,
            severity,
        }),
        closeNotification: (state) => ({
            ...initialState,
            open: false,
        }),
    },
});

export const { openNotification, closeNotification } = actions;

export default reducer;
