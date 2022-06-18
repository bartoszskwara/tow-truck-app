import { Skeleton, SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';

interface Props {
    sx?: SxProps<Theme>;
}

const Loader = ({ sx }: Props) => (
    <Skeleton
        component="div"
        sx={[{ flex: 1 }, ...(Array.isArray(sx) ? sx : [sx])]}
        animation="wave"
        variant="rectangular"
    />
);

export default Loader;
