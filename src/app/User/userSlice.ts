import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { openNotification } from '../../components/SystemNotification/systemNotificationSlice';
import { ApiStatus } from 'types';

export interface User {
    name: string;
    avatar: string;
    company: {
        id: number;
        name: string;
        logo: string;
    };
    newMessages: number;
    newNotifications: number;
    preferences: {
        theme: string;
        language: string;
    };
}

export type UserStateType = {
    user: User | undefined;
    status: ApiStatus;
};

const initialState: UserStateType = {
    user: undefined,
    status: 'idle',
};

const { actions, reducer } = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearCurrentUser: () => ({ ...initialState }),
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentUser.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchCurrentUser.fulfilled, (state, action) => ({
                ...state,
                user: action.payload,
                status: 'success',
            }))
            .addCase(fetchCurrentUser.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const fetchCurrentUser = createAsyncThunk(
    'user/fetch_current_user',
    async (token: string, { dispatch }) => {
        await new Promise((res) => setTimeout(res, 500));
        try {
            const response = await fetch('./mockApi/currentUser.json').then(
                (res) => res.json()
            );
            return response;
        } catch (e) {
            dispatch(
                openNotification({
                    textProps: {
                        text: 'Fetching stations failed',
                        name: 'FetchingStationsFailed',
                    },
                    severity: 'error',
                })
            );
        }
    }
);

export const { clearCurrentUser } = actions;

export default reducer;
