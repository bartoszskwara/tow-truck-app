import { Address, Stats } from 'types';

type Person = {
    id: number;
    name: string;
};
export type Station = {
    id: number;
    name: string;
    manager: Person;
    members: Person[];
    stats: Stats[];
    address: Address;
    color: string;
};
