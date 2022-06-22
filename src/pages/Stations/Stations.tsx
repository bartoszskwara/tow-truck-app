import { useEffect } from 'react';
import { Box } from '@mui/material';
import { useAppDispatch } from '../../app/store';
import Map from './Map';
import StationsList from './StationsList';
import Stats from './Stats';
import { clearStore } from './store/stationsSlice';

const Stations = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        return () => {
            dispatch(clearStore());
        };
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                gap: (theme) => theme.spacing(2.5),
                flex: 1,
            }}
        >
            <Box sx={{ display: 'flex', flex: 2 }}>
                <StationsList />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 3 }}>
                <Stats />
                <Map />
            </Box>
        </Box>
    );
};

export default Stations;
