import PropTypes from 'prop-types';
import { Badge as MUIBadge } from '@mui/material';

const Badge = ({ children, ...rest }) => (
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
