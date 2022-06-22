import React from 'react';
import { Box } from '@mui/material';
import Loader from 'components/Loader';

const StationsLoader = () => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            gap: (theme) => theme.spacing(4),
        }}
    >
        {Array(2)
            .fill(0)
            .map((_, i) => (
                <Loader
                    key={`stations_loader_${i}`}
                    sx={{
                        height: (theme) => theme.spacing(27),
                        borderRadius: (theme) => theme.spacing(1),
                    }}
                />
            ))}
    </Box>
);

export default StationsLoader;
