import { Stats } from '../../../types/Stats';

type Person = {
    id: number;
    name: string;
};
type Address = {
    city: string;
    region: string;
    zipcode: string;
    street: string;
    country: string;
};
type Station = {
    id: number;
    name: string;
    manager: Person;
    members: Person[];
    stats: (Stats)[];
    address: Address;
    color: string;
};

export default Station;
