import { ReactNode } from 'react';
import { Stats } from 'types/Stats';

export interface ValueCreatorsType {
    [key: string]: (i: Stats) => ReactNode;
}
export interface Labels {
    [key: string]: string;
}
