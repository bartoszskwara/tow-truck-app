import { Box } from '@mui/material';
import Accidents from './Accidents';
import Chat from './Chat';
import Map from './Map';
import Stats from './Stats';

const Dashboard = () => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'row',
            padding: (theme) => `
                    ${theme.spacing(2)}
                    ${theme.spacing(4)}
                    ${theme.spacing(1)}
                    ${theme.spacing(6)}
                `,
        }}
    >
        <Accidents
            sx={{
                flex: 1.5,
                marginRight: (theme) => theme.spacing(1.5),
            }}
        />
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                flex: 2,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Stats />
                <Map sx={{ marginTop: (theme) => theme.spacing(1) }} />
            </Box>
            <Chat />
        </Box>
    </Box>
);

export default Dashboard;
