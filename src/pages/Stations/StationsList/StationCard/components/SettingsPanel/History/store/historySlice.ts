import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { openNotification } from 'components/SystemNotification/store/systemNotificationSlice';
import { ApiStatus, History } from 'types';

interface StationsStateType {
    history: History[];
    apiStatus: {
        history: ApiStatus;
    };
}

const initialState: StationsStateType = {
    history: [],
    apiStatus: {
        history: 'idle',
    },
};

const { actions, reducer } = createSlice({
    name: 'history',
    initialState,
    reducers: {
        clearStore: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHistory.pending, (state) => {
                state.apiStatus.history = 'pending';
            })
            .addCase(fetchHistory.fulfilled, (state, action) => {
                state.apiStatus.history = 'success';
                state.history = action.payload;
            })
            .addCase(fetchHistory.rejected, (state) => {
                state.apiStatus.history = 'failed';
            });
    },
});

export const fetchHistory = createAsyncThunk(
    'history/fetch_history',
    async (_, { dispatch }) => {
        await new Promise((res) => setTimeout(res, 2000));
        try {
            const response = await fetch('./mockApi/history.json').then((res) =>
                res.json()
            );
            return response.history;
        } catch (e) {
            dispatch(
                openNotification({
                    textProps: {
                        text: 'Fetching history failed',
                        name: 'FetchingHistoryFailed',
                    },
                    severity: 'error',
                })
            );
            throw e;
        }
    }
);

export const { clearStore } = actions;

export default reducer;
