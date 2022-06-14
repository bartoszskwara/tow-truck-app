import { ReactNode } from 'react';

export type Variable = string | number | ReactNode;

export type LabelProps = {
    text?: string | ReactNode;
    name?: string;
    variables?: Variable[];
};
