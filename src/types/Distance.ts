import { Station } from './Station';

export type Distance = {
    value: number;
    station: Partial<Station>;
    time: number;
};
