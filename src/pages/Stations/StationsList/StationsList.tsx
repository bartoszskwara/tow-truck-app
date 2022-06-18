import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/store';
import { Station } from '../../../types';
import { fetchStations } from '../stationsSlice';
import StationCard from './StationCard';
import StationsListLoader from './StationsListLoader';

export const StationContext = React.createContext<Partial<Station>>({});

const StationsList = () => {
    const dispatch = useAppDispatch();
    const {
        stations,
        apiStatus: { stations: stationsApiStatus },
    } = useAppSelector(({ stations }) => stations);

    useEffect(() => {
        dispatch(fetchStations());
    }, []);

    return (
        <>
            {stationsApiStatus === 'pending' && <StationsListLoader />}
            {stationsApiStatus === 'success' && (
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
        </>
    );
};

export default StationsList;
