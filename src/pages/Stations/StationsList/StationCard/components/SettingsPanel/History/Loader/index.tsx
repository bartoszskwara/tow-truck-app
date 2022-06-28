import React from 'react';
import { Box } from '@mui/material';
import Loader from 'components/Loader';

const StationsLoader = () => (
    <Box
        sx={{
            display: 'flex',
            flex: 1,
            gap: (theme) => theme.spacing(4),
            paddingY: (theme) => theme.spacing(2),
        }}
    >
        {Array(2)
            .fill(0)
            .map((_, i) => (
                <Box
                    key={`stations_loader_wrapper_${i}`}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                        gap: (theme) => theme.spacing(1),
                    }}
                >
                    {Array(3)
                        .fill(0)
                        .map((_, j) => (
                            <Loader
                                key={`stations_loader_${j}`}
                                sx={{
                                    height: (theme) => theme.spacing(10),
                                    borderRadius: (theme) => theme.spacing(0.5),
                                }}
                            />
                        ))}
                </Box>
            ))}
    </Box>
);

export default StationsLoader;
