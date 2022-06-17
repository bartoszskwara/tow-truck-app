import { useContext } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, IconButton } from '@mui/material';
import { Station } from 'types';
import { StationContext } from '../StationsList';

const ActionsBar = () => {
    const { id } = useContext<Partial<Station>>(StationContext);
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingRight: (theme) => theme.spacing(4),
            }}
        >
            <IconButton onClick={() => console.log('list click, id:', id)}>
                <SettingsIcon
                    sx={{ color: (theme) => theme.palette.text.secondary }}
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
};

export default ActionsBar;
