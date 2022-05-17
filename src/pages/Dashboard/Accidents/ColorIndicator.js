import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import getStatusColor from './getStatusColor';

const ColorIndicator = ({ status }) => (
    <Box
        sx={(theme) => ({
            background: getStatusColor(theme, status),
            width: theme.spacing(2),
            borderBottomLeftRadius: theme.spacing(1),
            borderTopLeftRadius: theme.spacing(1),
        })}
    />
);

ColorIndicator.propTypes = {
    status: PropTypes.string,
};

export default ColorIndicator;
