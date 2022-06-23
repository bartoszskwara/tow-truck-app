import { ReactNode } from 'react';
import PropTypes from 'prop-types';

export type Variable = string | number | ReactNode;

export type LabelProps = {
    text?: string | ReactNode | null;
    name?: string | null;
    variables?: Variable[] | null;
};

export const LabelTextPropType = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
]);
export const LabelNamePropType = PropTypes.string;
export const LabelVariablePropType = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
]);

export const LabelPropType = PropTypes.shape({
    text: LabelTextPropType,
    name: LabelNamePropType,
    variables: PropTypes.arrayOf(LabelVariablePropType),
});
