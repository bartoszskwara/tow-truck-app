import { useEffect } from 'react';
import { Box, Theme } from '@mui/material';
import { useAppDispatch } from '../../app/store';
import Accidents from './Accidents';
import { clearStore } from './dashboardSlice';
import Map from './Map';
import Stats from './Stats';

const Dashboard = () => {
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
                flex: 1,
                flexDirection: 'row',
                gap: (theme) => theme.spacing(2.5),
            }}
        >
            <Accidents
                sx={{
                    flex: 1.5,
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 2,
                }}
            >
                <Stats />
                <Map sx={{ marginTop: (theme: Theme) => theme.spacing(1) }} />
            </Box>
        </Box>
    );
};

export default Dashboard;
