import { Box, Theme } from '@mui/material';
import Accidents from './Accidents';
import Chat from './Chat';
import Map from './Map';
import Stats from './Stats';

const Dashboard = () => (
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
                flexDirection: 'row',
                justifyContent: 'space-between',
                flex: 2,
                gap: (theme) => theme.spacing(2.5),
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                }}
            >
                <Stats />
                <Map sx={{ marginTop: (theme: Theme) => theme.spacing(1) }} />
            </Box>
            <Chat />
        </Box>
    </Box>
);

export default Dashboard;
