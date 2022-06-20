import React from 'react';
import { Box } from '@mui/material';
import Loader from 'components/Loader';

const ChatCategoryLoader = () => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            gap: (theme) => theme.spacing(2),
        }}
    >
        <Loader
            key={`chat_loader_text`}
            sx={(theme) => ({
                backgroundColor: theme.palette.gray[900],
                '&:after': {
                    background: (theme) =>
                        `linear-gradient(90deg, transparent, ${theme.palette.gray[800]}, transparent)`,
                },
            })}
            variant="text"
        />
        {Array(3)
            .fill(0)
            .map((_, i) => (
                <Loader
                    key={`chat_loader_${i}`}
                    sx={(theme) => ({
                        backgroundColor: theme.palette.gray[900],
                        width: theme.spacing(5.5),
                        height: theme.spacing(5.5),
                        '&:after': {
                            background: (theme) =>
                                `linear-gradient(90deg, transparent, ${theme.palette.gray[800]}, transparent)`,
                        },
                    })}
                    variant="circular"
                />
            ))}
    </Box>
);

const ChatLoader = () => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            gap: (theme) => theme.spacing(6),
        }}
    >
        <ChatCategoryLoader />
        <ChatCategoryLoader />
    </Box>
);

export default ChatLoader;
