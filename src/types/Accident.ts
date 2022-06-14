import { Address } from './Address';
import { Distance } from './Distance';

export type AccidentStatus = 'new' | 'in_progress' | 'completed' | 'missed';

export type Accident = {
    id: number;
    datetime: number;
    address: Address;
    distance: Distance;
    lastUpdate: number;
    status: AccidentStatus;
};
