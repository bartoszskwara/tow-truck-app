import { useEffect } from 'react';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/store';
import { fetchStations } from '../stationsSlice';

const StationsList = () => {
    const dispatch = useAppDispatch();
    const stations = useAppSelector(({ stations }) => stations.stations);
    const apiStatus = useAppSelector(({ stations: { status } }) => status);

    useEffect(() => {
        dispatch(fetchStations());
    }, []);

    return (
        <Box
            sx={{
                padding: 2,
            }}
        >
            {apiStatus === 'pending' && 'Loading...'}
            {apiStatus === 'failed' && 'Error!'}
            {apiStatus === 'success' && (
                <ul>
                    {stations?.map((i) => (
                        <li key={`station_${i.id}`}>{i.name}</li>
                    ))}
                </ul>
            )}
        </Box>
    );
};

export default StationsList;
