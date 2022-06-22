import { ReactNode } from 'react';

export type Variable = string | number | ReactNode;

export type LabelProps = {
    text?: string | ReactNode | null;
    name?: string | null;
    variables?: Variable[] | null;
};
