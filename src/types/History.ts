import { AccidentStatus } from './Accident';
import { Address } from './Address';
import { Person } from './Person';

export type History = {
    id: number;
    address: Address;
    datetime: number;
    status: AccidentStatus;
    mileage: number;
    duration: number;
    driver: Person;
};
