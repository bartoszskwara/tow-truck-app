import React from 'react';
import {Box, Divider} from '@mui/material';
import Loader from 'components/Loader';

const StationsLoader = () => (
    <Box
        sx={{
            display: 'flex',
            flex: 1,
            paddingY: (theme) => theme.spacing(2),
        }}
    >
        <Box
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
                        key={`stations_history_loader_${j}`}
                        sx={{
                            height: (theme) => theme.spacing(8),
                            borderRadius: (theme) => theme.spacing(0.5),
                        }}
                    />
                ))}
        </Box>
        <Divider
            orientation="vertical"
            flexItem
            sx={{ marginX: (theme) => theme.spacing(1) }}
        />
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flex: 1,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: (theme) => theme.spacing(1),
                }}
            >
                {Array(3)
                    .fill(0)
                    .map((_, j) => (
                        <Loader
                            key={`stations_loader_${j}`}
                            sx={{
                                height: (theme) => theme.spacing(4),
                                borderRadius: (theme) => theme.spacing(0.5),
                            }}
                        />
                    ))}
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: (theme) => theme.spacing(1),
                }}
            >
                <Loader variant="circular" width={40} height={40} />
                <Loader
                    sx={{
                        height: (theme) => theme.spacing(4),
                        flex: 0.5,
                        borderRadius: (theme) => theme.spacing(0.5),
                    }}
                />
            </Box>
        </Box>
    </Box>
);

export default StationsLoader;
