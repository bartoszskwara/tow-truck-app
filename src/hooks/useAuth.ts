import {
    authenticate,
    removeTokenFromStorageAndState,
} from 'app/Auth/authSlice';
import { useAppDispatch, useAppSelector } from 'app/store';

interface AuthData {
    isAuthenticated: boolean;
    onLogin: () => void;
    onLogout: () => void;
}

const useAuth = (): AuthData => {
    const dispatch = useAppDispatch();
    const token = useAppSelector(({ auth }) => auth.token);

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
    };
};

export default useAuth;
