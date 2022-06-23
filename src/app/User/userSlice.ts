import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { openNotification } from 'components/SystemNotification/store/systemNotificationSlice';
import { ApiStatus } from 'types';
import { removeTokenFromStorageAndState } from '../Auth/authSlice';

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
            return await fetch('./mockApi/currentUser.json').then((res) =>
                res.json()
            );
        } catch (e) {
            dispatch(
                openNotification({
                    textProps: {
                        text: 'Fetching user data failed',
                        name: 'FetchingUserDataFailed',
                    },
                    severity: 'error',
                })
            );
            dispatch(removeTokenFromStorageAndState());
            throw e;
        }
    }
);

export const { clearCurrentUser } = actions;

export default reducer;
