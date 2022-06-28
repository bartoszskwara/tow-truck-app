import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { SxPropType } from 'propTypes';
import { Sx } from 'types';

export interface StatsItemProps {
    title?: string | null;
    value?: string | ReactNode | null;
    sxProps?: {
        root?: Sx;
        value?: Sx;
        title?: Sx;
    };
}
export const StatsItemPropTypes = PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    sxProps: PropTypes.shape({
        root: SxPropType,
        value: SxPropType,
        title: SxPropType,
    }),
});
