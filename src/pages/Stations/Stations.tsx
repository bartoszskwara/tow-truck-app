import { Box } from '@mui/material';
import StationsList from './StationsList';

const Stations = () => {
    return (
        <Box
            sx={{
                padding: 2,
            }}
        >
            Stations
            <StationsList />
        </Box>
    );
};

export default Stations;
