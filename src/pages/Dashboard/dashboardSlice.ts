import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { openNotification } from 'components/SystemNotification/systemNotificationSlice';
import { Accident, ApiStatus, Stats } from 'types';

interface StateType {
    accidents: Accident[];
    stats: Stats[];
    apiStatus: {
        accidents: ApiStatus;
        stats: ApiStatus;
    };
}

const initialState: StateType = {
    accidents: [],
    stats: [],
    apiStatus: {
        accidents: 'idle',
        stats: 'idle',
    },
};

const { actions, reducer } = createSlice({
    name: 'accidents',
    initialState,
    reducers: {
        clearStore: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAccidents.pending, (state) => {
                state.apiStatus.accidents = 'pending';
            })
            .addCase(fetchAccidents.fulfilled, (state, action) => {
                state.apiStatus.accidents = 'success';
                state.accidents = action.payload;
            })
            .addCase(fetchAccidents.rejected, (state) => {
                state.apiStatus.accidents = 'failed';
            })
            .addCase(fetchStatistics.pending, (state) => {
                state.apiStatus.stats = 'pending';
            })
            .addCase(fetchStatistics.fulfilled, (state, action) => {
                state.apiStatus.stats = 'success';
                state.stats = action.payload;
            })
            .addCase(fetchStatistics.rejected, (state) => {
                state.apiStatus.stats = 'failed';
            });
    },
});

export const fetchAccidents = createAsyncThunk(
    'dashboard/fetch_accidents',
    async (_, { dispatch }) => {
        await new Promise((res) => setTimeout(res, 1000));
        try {
            const response = await fetch('./mockApi/accidents.json').then(
                (res) => res.json()
            );
            return response.accidents;
        } catch (e) {
            dispatch(
                openNotification({
                    textProps: {
                        text: 'Fetching accidents failed',
                        name: 'FetchingAccidentsFailed',
                    },
                    severity: 'error',
                })
            );
        }
    }
);

export const fetchStatistics = createAsyncThunk(
    'dashboard/fetch_statistics',
    async (_, { dispatch }) => {
        await new Promise((res) => setTimeout(res, 2800));
        try {
            const response = await fetch('./mockApi/stats.json').then((res) =>
                res.json()
            );
            return response.stats;
        } catch (e) {
            dispatch(
                openNotification({
                    textProps: {
                        text: 'Fetching statistics failed',
                        name: 'FetchingStatisticsFailed',
                    },
                    severity: 'error',
                })
            );
        }
    }
);

export const { clearStore } = actions;

export default reducer;
