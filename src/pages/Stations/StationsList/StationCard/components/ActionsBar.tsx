import PropTypes from 'prop-types';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, IconButton } from '@mui/material';
import withContext from 'hoc/withContext';
import { Station } from 'types';
import StationContext from '../../StationContext';

interface Props extends Pick<Station, 'id'> {
    onSettingsToggle: () => void;
    settingsActive: boolean;
}

const ActionsBar = ({ id, settingsActive, onSettingsToggle }: Props) => (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingRight: (theme) => theme.spacing(4),
        }}
    >
        <IconButton
            onClick={() => {
                console.log('list click, id:', id);
                onSettingsToggle();
            }}
        >
            <SettingsIcon
                sx={{
                    color: (theme) =>
                        settingsActive
                            ? theme.palette.text.primary
                            : theme.palette.text.secondary,
                }}
            />
        </IconButton>
        <IconButton
            sx={{
                margin: (theme) => `0 ${theme.spacing(1)}`,
            }}
            onClick={() => console.log('list click, id:', id)}
        >
            <MessageIcon
                sx={{
                    color: (theme) => theme.palette.text.secondary,
                }}
            />
        </IconButton>
        <IconButton onClick={() => console.log('list click, id:', id)}>
            <LocationOnIcon
                sx={{ color: (theme) => theme.palette.text.secondary }}
            />
        </IconButton>
    </Box>
);

ActionsBar.propTypes = {
    id: PropTypes.number.isRequired,
};

export default withContext<Props, Station>(StationContext)(ActionsBar);
