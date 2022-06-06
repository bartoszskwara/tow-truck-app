import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/store';
import { removeTokenFromStorageAndState } from '../Auth/authSlice';
import { clearCurrentUser, fetchCurrentUser } from './userSlice';

const CurrentUserManager = () => {
    const dispatch = useAppDispatch();
    const token = useAppSelector(({ auth }) => auth.token);
    const user = useAppSelector(({ user }) => user);
    console.log(user);

    const localStorageTokenListener = (e: StorageEvent): void => {
        console.log('a', e.key);
        if (e.key !== 'auth_token') {
            return;
        }
        const storageToken = localStorage.getItem('auth_token');
        if (storageToken) {
            dispatch(fetchCurrentUser(storageToken));
        } else {
            dispatch(removeTokenFromStorageAndState());
            dispatch(clearCurrentUser());
        }
    };

    useEffect(() => {
        window.addEventListener('storage', localStorageTokenListener);
        return () => {
            window.removeEventListener('storage', localStorageTokenListener);
        };
    }, []);

    useEffect(() => {
        if (token) {
            dispatch(fetchCurrentUser(token));
        }
    }, [token]);

    return null;
};

export default CurrentUserManager;
