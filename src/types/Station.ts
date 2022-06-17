import { Address, OnlineStatus, Stats } from 'types';

type Person = {
    id: number;
    name: string;
    avatar?: string;
};
export type Station = {
    id: number;
    name: string;
    avatar?: string;
    status: OnlineStatus;
    manager: Person;
    members: Person[];
    stats: Stats[];
    address: Address;
    color: string;
};
