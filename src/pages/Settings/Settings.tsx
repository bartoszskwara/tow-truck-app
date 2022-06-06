import { Box } from '@mui/material';
import { useTheme } from 'hooks';

const Settings = () => {
    const { toggleTheme } = useTheme();
    return (
        <Box
            sx={{
                padding: 2,
            }}
        >
            Settings
            <button onClick={toggleTheme}>Toggle theme</button>
        </Box>
    );
};

export default Settings;
