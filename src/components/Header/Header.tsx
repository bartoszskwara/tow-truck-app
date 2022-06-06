import { Box, Theme } from '@mui/material';
import { useAuth, useUser } from 'hooks';
import ActionButtons from './ActionButtons';
import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
    const { onLogout } = useAuth();
    const {
        name,
        company: { name: companyName, logo } = {},
        newMessages,
        newNotifications,
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
            <Logo
                src={logo}
                companyName={companyName}
                sx={{
                    flex: 1.5,
                    marginRight: (theme: Theme) => theme.spacing(2.5),
                }}
            />
            <Box
                sx={{
                    flex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Navigation />
                <ActionButtons
                    newMessages={newMessages}
                    newNotifications={newNotifications}
                />
            </Box>
        </Box>
    );
};

export default Header;
