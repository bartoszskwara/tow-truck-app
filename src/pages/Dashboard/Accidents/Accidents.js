import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const Accidents = ({ sx }) => (
    <Box sx={[...(Array.isArray(sx) ? sx : [sx])]}>Accidents</Box>
);

Accidents.propTypes = {
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.func,
                PropTypes.object,
                PropTypes.bool,
            ])
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};

export default Accidents;
