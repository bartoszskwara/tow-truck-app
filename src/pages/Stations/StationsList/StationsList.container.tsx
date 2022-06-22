import React, { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'app/store';
import { fetchStations } from '../store/stationsSlice';
import StationsListView from './StationsList.view';

const StationsList = () => {
    const dispatch = useAppDispatch();
    const {
        stations,
        apiStatus: { stations: stationsApiStatus },
    } = useAppSelector(({ stations }) => stations);
    let listRef = useRef();

    useEffect(() => {
        dispatch(fetchStations());
    }, []);

    return (
        <StationsListView
            ref={listRef}
            stationsApiStatus={stationsApiStatus}
            stations={stations}
        />
    );
};

export default StationsList;
