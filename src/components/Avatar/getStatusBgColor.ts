import { Theme } from '@mui/material';
import { OnlineStatus } from 'types';

export default ({ status, theme }: { status?: OnlineStatus; theme: Theme }) => {
    switch (status) {
        case 'online':
            return theme.palette.accent.light;
        case 'offline':
            return theme.palette.gray[100];
        case 'driving':
            return theme.palette.warning.main;
        default:
            return '';
    }
};
