import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { openNotification } from 'components/SystemNotification/systemNotificationSlice';
import { ApiStatus, Station } from 'types';

interface StationsStateType {
    stations: Station[];
    status: ApiStatus;
}

const initialState: StationsStateType = {
    stations: [],
    status: 'idle',
};

const { reducer } = createSlice({
    name: 'stations',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStations.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchStations.fulfilled, (state, action) => {
                state.status = 'success';
                state.stations = action.payload;
            })
            .addCase(fetchStations.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const fetchStations = createAsyncThunk(
    'stations/fetch_stations',
    async (_, { dispatch }) => {
        await new Promise((res) => setTimeout(res, 1000));
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

export default reducer;
