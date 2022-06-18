import React from 'react';
import { Box } from '@mui/material';
import Loader from 'components/Loader';

const StatsLoader = () => (
    <Box
        sx={{
            display: 'flex',
            flex: 1,
            gap: (theme) => theme.spacing(2),
        }}
    >
        {Array(3)
            .fill(0)
            .map((_, i) => (
                <Loader
                    key={`stations_stats_loader_${i}`}
                    sx={{
                        flex: 1,
                        height: (theme) => theme.spacing(12),
                        borderRadius: (theme) => theme.spacing(1),
                    }}
                />
            ))}
    </Box>
);

export default StatsLoader;
