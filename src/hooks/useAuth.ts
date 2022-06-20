import {
    authenticate,
    removeTokenFromStorageAndState,
} from 'app/Auth/authSlice';
import { useAppDispatch, useAppSelector } from 'app/store';

interface AuthData {
    isAuthenticated: boolean;
    onLogin: () => void;
    onLogout: () => void;
    loginFailed: boolean;
}

const useAuth = (): AuthData => {
    const dispatch = useAppDispatch();
    const { token, status } = useAppSelector(({ auth }) => auth);

    const handleLogin = async () => {
        dispatch(authenticate());
    };

    const handleLogout = () => {
        dispatch(removeTokenFromStorageAndState());
    };

    return {
        isAuthenticated: !!token,
        onLogin: handleLogin,
        onLogout: handleLogout,
        loginFailed: status === 'failed',
    };
};

export default useAuth;
