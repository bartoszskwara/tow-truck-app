import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { openNotification } from 'components/SystemNotification/store/systemNotificationSlice';
import { ApiStatus, ChatItem } from 'types';

interface StateType {
    recentChats: ChatItem[];
    apiStatus: {
        chats: ApiStatus;
    };
}

const initialState: StateType = {
    recentChats: [],
    apiStatus: {
        chats: 'idle',
    },
};

const { actions, reducer } = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        clearStore: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecentChats.pending, (state) => {
                state.apiStatus.chats = 'pending';
            })
            .addCase(fetchRecentChats.fulfilled, (state, action) => {
                state.apiStatus.chats = 'success';
                state.recentChats = action.payload;
            })
            .addCase(fetchRecentChats.rejected, (state) => {
                state.apiStatus.chats = 'failed';
            });
    },
});

export const fetchRecentChats = createAsyncThunk(
    'chat/fetch_recent_chats',
    async (_, { dispatch }) => {
        await new Promise((res) => setTimeout(res, 1000));
        try {
            const response = await fetch('./mockApi/recentChats.json').then(
                (res) => res.json()
            );
            return response.chats;
        } catch (e) {
            dispatch(
                openNotification({
                    textProps: {
                        text: 'Fetching chats failed',
                        name: 'FetchingChatsFailed',
                    },
                    severity: 'error',
                })
            );
            throw e;
        }
    }
);

export const { clearStore } = actions;

export default reducer;
