import { Box } from '@mui/material';
import ActionsBar from './ActionsBar';
import Footer from './Footer';
import Main from './Main';
import Stats from './Stats';

const StationCard = () => (
    <Box>
        <Main />
        <Box
            sx={{
                margin: (theme) => `${theme.spacing(1)} 0`,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Stats />
            <ActionsBar />
        </Box>
        <Footer />
    </Box>
);

export default StationCard;