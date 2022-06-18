import { ElementType } from 'react';
import { Skeleton, SkeletonProps } from '@mui/material';

const Loader = ({
    ...rest
}: SkeletonProps<ElementType, { component?: ElementType }>) => (
    <Skeleton
        component="div"
        animation="wave"
        variant="rectangular"
        {...rest}
    />
);

export default Loader;
