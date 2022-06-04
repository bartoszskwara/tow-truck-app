import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Station from '../types/Station';

const StationsList = () => {
    const [stations, setStations] = useState<Station[]>([]);

    useEffect(() => {
        const fetchStations = async () => {
            const response = await fetch('./mockApi/stations.json').then(
                (res) => res.json()
            );
            if (response) {
                setStations(response.stations);
            }
        };
        fetchStations();
    }, []);

    return (
        <Box
            sx={{
                padding: 2,
            }}
        >
            <ul>
                {stations?.map((i) => (
                    <li key={`station_${i.id}`}>{i.name}</li>
                ))}
            </ul>
        </Box>
    );
};

export default StationsList;
