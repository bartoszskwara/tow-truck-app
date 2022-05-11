import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const Map = ({ sx }) => (
    <Box sx={[...(Array.isArray(sx) ? sx : [sx])]}>Map</Box>
);

Map.propTypes = {
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

export default Map;
