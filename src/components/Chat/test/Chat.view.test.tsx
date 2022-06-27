import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'utilities/test-utils';
import ChatView from '../Chat.view';

test('renders Chat View component in loading state', () => {
    customRender(
        <ChatView
            chatsLoading={true}
            chatsLoaded={false}
            chatsError={false}
            station={[]}
            driver={[]}
        />
    );
    expect(screen.queryByText('Stations')).not.toBeInTheDocument();
    expect(screen.queryByText('Drivers')).not.toBeInTheDocument();
});

test('renders Chat View component in error state', () => {
    customRender(
        <ChatView
            chatsLoading={false}
            chatsLoaded={true}
            chatsError={false}
            station={[]}
            driver={[]}
        />
    );
    expect(screen.queryByText('Stations')).not.toBeInTheDocument();
    expect(screen.queryByText('Drivers')).not.toBeInTheDocument();
});

test('renders Chat View component', () => {
    customRender(
        <ChatView
            chatsLoading={false}
            chatsLoaded={true}
            chatsError={false}
            station={[
                {
                    id: 1,
                    status: 'online',
                    name: 'Station 1',
                    avatar: '/avatars/1',
                    type: 'station',
                    notifications: 2,
                },
            ]}
            driver={[
                {
                    id: 2,
                    status: 'offline',
                    name: 'Driver 1',
                    avatar: '/avatars/2',
                    type: 'driver',
                    notifications: 3,
                },
            ]}
        />
    );
    expect(screen.getByText('Stations')).toBeInTheDocument();
    expect(screen.getByText('Drivers')).toBeInTheDocument();
});
