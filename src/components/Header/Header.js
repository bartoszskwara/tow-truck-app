import { Box } from '@mui/material';
import { useAuth, useUser } from 'hooks';
import ActionButtons from './ActionButtons';
import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
    const { onLogout } = useAuth();
    const {
        user: {
            name,
            company: { name: companyName, logo } = {},
            newMessages,
            newNotifications,
        },
    } = useUser();
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: (theme) => `
                    ${theme.spacing(1)}
                    ${theme.spacing(4)}
                    ${theme.spacing(1)}
                    ${theme.spacing(6)}
                `,
                background: (theme) => theme.palette.background.primary,
            }}
        >
            <Logo src={logo} companyName={companyName} sx={{ flex: 2 }} />
            <Navigation sx={{ flex: 1 }} />
            <ActionButtons
                newMessages={newMessages}
                newNotifications={newNotifications}
                sx={{ flex: 1 }}
            />
        </Box>
    );
};

export default Header;
