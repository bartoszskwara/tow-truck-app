import { useEffect, useMemo } from 'react';
import _ from 'lodash';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/store';
import ChatLoader from './ChatLoader';
import { fetchRecentChats } from './chatSlice';
import List from './List';

const Chat = () => {
    const dispatch = useAppDispatch();
    const { recentChats, apiStatus } = useAppSelector(({ chat }) => chat);

    const { driver, station } = useMemo(
        () => _.groupBy(recentChats, 'type'),
        [recentChats]
    );

    const chatsLoading = apiStatus.chats === 'pending';
    const chatsLoaded = apiStatus.chats === 'success';
    const chatsError = apiStatus.chats === 'failed';

    useEffect(() => {
        dispatch(fetchRecentChats());
    }, []);

    return (
        <>
            {!chatsError && (
                <Box
                    sx={(theme) => ({
                        background: theme.palette.background.accent,
                        color: theme.palette.text.contrastText,
                        padding: theme.spacing(2),
                        borderRadius: theme.spacing(1),
                    })}
                >
                    {chatsLoading && <ChatLoader />}
                    {chatsLoaded && (
                        <>
                            {station && (
                                <List
                                    items={station}
                                    label={{
                                        text: 'Stations',
                                        name: 'ChatStations',
                                    }}
                                    sx={{
                                        marginBottom: (theme) =>
                                            theme.spacing(2),
                                    }}
                                />
                            )}
                            {driver && (
                                <List
                                    items={driver}
                                    label={{
                                        text: 'Drivers',
                                        name: 'ChatDrivers',
                                    }}
                                />
                            )}
                        </>
                    )}
                </Box>
            )}
        </>
    );
};

export default Chat;
