import { Box } from '@mui/material';
import Map from './Map';
import StationsList from './StationsList';
import Stats from './Stats';

const Stations = () => {
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
