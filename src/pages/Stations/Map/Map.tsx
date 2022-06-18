import PropTypes from 'prop-types';
import { Box, SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';

interface Props {
    sx?: SxProps<Theme>;
}

const Map = ({ sx }: Props) => (
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
