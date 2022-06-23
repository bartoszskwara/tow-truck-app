import { Box } from '@mui/material';
import { SxPropType } from 'propTypes';
import { Sx } from 'types';

interface Props {
    sx?: Sx;
}

const Map = ({ sx }: Props) => (
    <Box sx={[...(Array.isArray(sx) ? sx : [sx])]}>Map</Box>
);

Map.propTypes = {
    sx: SxPropType,
};

export default Map;
