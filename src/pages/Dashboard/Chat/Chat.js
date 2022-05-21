import { useEffect, useMemo, useState } from 'react';
import _ from 'lodash';
import { Box } from '@mui/material';
import List from './List';

const Chat = () => {
    const [recentChats, setRecentChats] = useState([]);

    const { driver, station } = useMemo(
        () => _.groupBy(recentChats, 'type'),
        [recentChats]
    );

    useEffect(() => {
        const fetchRecentChats = async () => {
            const response = await fetch('./mockApi/recentChats.json').then(
                (res) => res.json()
            );
            if (response) {
                setRecentChats(response.chats);
            }
        };
        fetchRecentChats();
    }, []);

    return (
        <Box>
            <Box
                sx={(theme) => ({
                    background: theme.palette.background.accent,
                    color: theme.palette.text.contrastText,
                    padding: theme.spacing(2),
                    borderRadius: theme.spacing(1),
                })}
            >
                {station && (
                    <List
                        items={station}
                        label={{ text: 'Stations', name: 'ChatStations' }}
                        sx={{
                            marginBottom: (theme) => theme.spacing(2),
                        }}
                    />
                )}
                {driver && (
                    <List
                        items={driver}
                        label={{ text: 'Drivers', name: 'ChatDrivers' }}
                    />
                )}
            </Box>
        </Box>

    );
};

export default Chat;
