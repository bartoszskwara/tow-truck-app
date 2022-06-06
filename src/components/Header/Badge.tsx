import React from 'react';
import PropTypes from 'prop-types';
import { Badge as MUIBadge, BadgeProps } from '@mui/material';

interface Props {
    children: React.ReactNode;
}

const Badge = ({ children, ...rest }: Props & BadgeProps) => (
    <MUIBadge
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        color="info"
        {...rest}
    >
        {children}
    </MUIBadge>
);

Badge.propTypes = {
    children: PropTypes.node,
};

export default Badge;
