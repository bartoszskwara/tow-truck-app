import { Box } from '@mui/material';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { onLogin, loginFailed } = useAuth();
    return (
        <Box
            sx={{
                padding: 2,
            }}
        >
            <span>Login page</span>
            {loginFailed && (
                <Box
                    component="p"
                    sx={{
                        color: (theme) => theme.palette.warning.main,
                    }}
                >
                    Login failed
                </Box>
            )}
            <button type="button" onClick={onLogin}>
                Sign in
            </button>
        </Box>
    );
};

export default Login;
