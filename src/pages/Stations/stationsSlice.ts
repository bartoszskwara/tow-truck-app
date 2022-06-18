import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { openNotification } from 'components/SystemNotification/systemNotificationSlice';
import { ApiStatus, Station, Stats } from 'types';

interface StationsStateType {
    stations: Station[];
    stats: Stats[];
    apiStatus: {
        stations: ApiStatus;
        stats: ApiStatus;
    };
}

const initialState: StationsStateType = {
    stations: [],
    stats: [],
    apiStatus: {
        stations: 'idle',
        stats: 'idle',
    },
};

const { actions, reducer } = createSlice({
    name: 'stations',
    initialState,
    reducers: {
        clearStore: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchStations.pending, (state) => {
                state.apiStatus.stations = 'pending';
            })
            .addCase(fetchStations.fulfilled, (state, action) => {
                state.apiStatus.stations = 'success';
                state.stations = action.payload;
            })
            .addCase(fetchStations.rejected, (state) => {
                state.apiStatus.stations = 'failed';
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

export const fetchStations = createAsyncThunk(
    'stations/fetch_stations',
    async (_, { dispatch }) => {
        await new Promise((res) => setTimeout(res, 2000));
        try {
            const response = await fetch('./mockApi/stations.json').then(
                (res) => res.json()
            );
            return response.stations;
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

export const fetchStatistics = createAsyncThunk(
    'stations/fetch_statistics',
    async (_, { dispatch }) => {
        await new Promise((res) => setTimeout(res, 2800));
        try {
            const response = await fetch('./mockApi/stations_stats.json').then(
                (res) => res.json()
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
