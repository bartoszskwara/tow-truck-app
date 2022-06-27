import { useEffect } from 'react';
import { Box } from '@mui/material';
import { useAppDispatch } from '../../app/store';
import Map from './Map';
import StationsList from './StationsList';
import Stats from './Stats';
import { clearStore } from './store/stationsSlice';
import StationsView from "./Stations.view";

const Stations = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        return () => {
            dispatch(clearStore());
        };
    }, []);

    return (
        <StationsView />
    );
};

export default Stations;
