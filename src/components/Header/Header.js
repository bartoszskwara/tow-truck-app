import { Box } from '@mui/material';
import useAuth from 'hooks/useAuth';

const Header = () => {
    const { onLogout } = useAuth();
    return (
        <Box
            sx={{
                padding: 1,
            }}
        >
            <span>Header</span>
            <button type="button" onClick={onLogout}>
                Sign out
            </button>
        </Box>
    );
};

export default Header;
