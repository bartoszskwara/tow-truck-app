import { createSlice } from '@reduxjs/toolkit';
import { AlertColor } from '@mui/material';
import { TextProps } from '../Text/Text';

interface SystemNotificationStateType {
    notifications: {
        textProps?: TextProps;
        severity?: AlertColor;
    }[];
}

const initialState: SystemNotificationStateType = {
    notifications: [],
};

const { actions, reducer } = createSlice({
    name: 'systemNotification',
    initialState,
    reducers: {
        openNotification: (state, { payload: { textProps, severity } }) => {
            state.notifications.push({
                textProps,
                severity,
            });
        },
        closeNotification: (state) => {
            state.notifications.pop();
        },
    },
});

export const { openNotification, closeNotification } = actions;

export default reducer;
