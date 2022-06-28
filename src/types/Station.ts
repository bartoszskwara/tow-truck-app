import { Address } from './Address';
import { OnlineStatus } from './OnlineStatus';
import { Person } from './Person';
import { Stats } from './Stats';

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
