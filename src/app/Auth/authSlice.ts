import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiStatus from '../../types/ApiStatus';
import { fetchCurrentUser } from '../User/userSlice';

interface AuthStateType {
    token: string | null;
    status: ApiStatus;
}

const initialState: AuthStateType = {
    token: localStorage.getItem('auth_token'),
    status: 'idle',
};

const { actions, reducer } = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        removeToken: (state) => {
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authenticate.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(authenticate.fulfilled, (state, action) => {
                state.status = 'success';
                state.token = action.payload;
            })
            .addCase(authenticate.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const authenticate = createAsyncThunk(
    'auth/authenticate',
    async (_, { dispatch }) => {
        try {
            const response = await fetch('./mockApi/token.json').then((res) =>
                res.json()
            );
            dispatch(saveTokenInLocalStorage(response.token));
            dispatch(fetchCurrentUser(response.token));
            return response.token;
        } catch (e) {
            dispatch(removeTokenFromStorageAndState());
        }
    }
);

export const saveTokenInLocalStorage = createAsyncThunk(
    'auth/save_token_in_local_storage',
    async (token: string) => {
        localStorage.setItem('auth_token', token);
    }
);

export const removeTokenFromStorageAndState = createAsyncThunk(
    'auth/remove_token_from_local_storage',
    async (_, { dispatch }) => {
        localStorage.removeItem('auth_token');
        dispatch(removeToken());
    }
);

export const { removeToken } = actions;

export default reducer;
