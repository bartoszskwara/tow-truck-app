import { Address, OnlineStatus, Stats } from 'types';

type Person = {
    id: number;
    name: string;
    avatar?: string | null;
};
export type Station = {
    id: number;
    name: string;
    avatar?: string | null;
    status: OnlineStatus;
    manager: Person;
    members: Person[];
    stats: Stats[];
    address: Address;
    color: string;
};
