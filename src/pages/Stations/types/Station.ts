type Person = {
    id: number;
    name: string;
};
type Stats = {
    type: string;
};
type ValueStats = Stats & {
    value: number;
};
type AvailableStats = Stats & {
    available: number;
    all: number;
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
    stats: (ValueStats | AvailableStats)[];
    address: Address;
    color: string;
};

export default Station;
