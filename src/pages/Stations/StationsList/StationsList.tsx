import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/store';
import Loader from 'components/Loader';
import { Station } from '../../../types';
import { fetchStations } from '../stationsSlice';
import StationCard from './StationCard';

export const StationContext = React.createContext<Partial<Station>>({});

const StationsList = () => {
    const dispatch = useAppDispatch();
    const { stations, status: apiStatus } = useAppSelector(
        ({ stations }) => stations
    );

    useEffect(() => {
        dispatch(fetchStations());
    }, []);

    return (
        <Box>
            {apiStatus === 'pending' && <Loader />}
            {apiStatus === 'success' && (
                <Box
                    component="ul"
                    sx={{ listStyleType: 'none', margin: 0, padding: 0 }}
                >
                    {stations?.map((i) => (
                        <Box
                            component="li"
                            key={`station_${i.id}`}
                            sx={{ marginBottom: (theme) => theme.spacing(4) }}
                        >
                            <StationContext.Provider value={i}>
                                <StationCard />
                            </StationContext.Provider>
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default StationsList;
