import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { SxProps, Theme } from '@mui/material';
import { SxPropType } from 'propTypes';

export interface StatsItemProps {
    title?: string | null;
    value?: string | ReactNode | null;
    sxProps?: {
        root?: SxProps<Theme>;
        value?: SxProps<Theme>;
        title?: SxProps<Theme>;
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
