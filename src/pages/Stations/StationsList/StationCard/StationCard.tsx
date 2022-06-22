import React from 'react';
import { Box } from '@mui/material';
import ActionsBar from './components/ActionsBar';
import Footer from './components/Footer';
import Main from './components/Main';
import Stats from './components/Stats';

const StationCard = React.forwardRef<HTMLDivElement, {}>((props, ref) => (
    <div ref={ref} {...props}>
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
    </div>
));
StationCard.displayName = 'StationCard';

export default StationCard;
