import React, { HTMLAttributes } from 'react';
import { Box } from '@mui/material';
import ActionsBar from './components/ActionsBar';
import Footer from './components/Footer';
import Main from './components/Main';
import SettingsPanel from './components/SettingsPanel';
import Stats from './components/Stats';

interface Props extends HTMLAttributes<HTMLDivElement> {
    expanded: boolean;
    onSettingsToggle: () => void;
}

const StationCardView = React.forwardRef<HTMLDivElement, Props>(
    ({ expanded, onSettingsToggle, ...divProps }, ref) => (
        <div ref={ref} {...divProps}>
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
                <ActionsBar
                    settingsActive={expanded}
                    onSettingsToggle={onSettingsToggle}
                />
            </Box>
            {expanded && <SettingsPanel />}
            <Footer />
        </div>
    )
);
StationCardView.displayName = 'StationCardView';

export default StationCardView;
