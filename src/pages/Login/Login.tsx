import { Box } from '@mui/material';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { onLogin } = useAuth();
    return (
        <Box
            sx={{
                padding: 2,
            }}
        >
            <span>Login page</span>
            <button type="button" onClick={onLogin}>
                Sign in
            </button>
        </Box>
    );
};

export default Login;
