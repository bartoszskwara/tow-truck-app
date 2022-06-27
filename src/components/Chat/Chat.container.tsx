import { useEffect, useMemo } from 'react';
import _ from 'lodash';
import { useAppDispatch, useAppSelector } from '../../app/store';
import ChatView from './Chat.view';
import { fetchRecentChats } from './chatSlice';

const ChatContainer = () => {
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
        <ChatView
            chatsLoading={chatsLoading}
            chatsLoaded={chatsLoaded}
            chatsError={chatsError}
            station={station || []}
            driver={driver || []}
        />
    );
};

export default ChatContainer;
