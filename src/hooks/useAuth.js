import { useContext } from 'react';
import { AuthContext, actions } from 'providers/Auth';

const authenticate = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve('test_token'), 250);
    });

const useAuth = () => {
    const context = useContext(AuthContext);
    console.log('>>', context);

    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    const handleLogin = async () => {
        const token = await authenticate();
        context.dispatch({ type: actions.SET_TOKEN, payload: token });
    };

    const handleLogout = () => {
        context.dispatch({ type: actions.SET_TOKEN, payload: null });
    };

    return {
        isAuthenticated:
            !!context.state.token || !!localStorage.getItem('auth_token'),
        onLogin: handleLogin,
        onLogout: handleLogout,
    };
};

export default useAuth;
