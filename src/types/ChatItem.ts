import { OnlineStatus } from './OnlineStatus';

export type ChatType = 'station' | 'driver';

export type ChatItem = {
    id: number;
    status: OnlineStatus;
    name: string;
    avatar: string;
    type: ChatType;
    notifications?: number;
};
