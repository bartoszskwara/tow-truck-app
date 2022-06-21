import { ReactNode } from 'react';
import { Box, SxProps, Theme } from '@mui/material';

interface Props {
    color?: string;
    type: 'top' | 'bottom';
    children: ReactNode;
    sx?: SxProps<Theme>;
}

const Card = ({ color, type, children, sx }: Props) => {
    return (
        <Box
            sx={[
                (theme) => ({
                    display: 'flex',
                    background: theme.palette.background.primary,
                    ...(type === 'top'
                        ? {
                              borderTopLeftRadius: theme.spacing(1),
                              borderTopRightRadius: theme.spacing(1),
                          }
                        : {}),
                    ...(type === 'bottom'
                        ? {
                              borderBottomLeftRadius: theme.spacing(1),
                              borderBottomRightRadius: theme.spacing(1),
                          }
                        : {}),
                }),
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            <Box
                sx={(theme) => ({
                    width: theme.spacing(3),
                    background: color,
                    ...(type === 'top'
                        ? {
                              borderTopLeftRadius: theme.spacing(1),
                          }
                        : {}),
                    ...(type === 'bottom'
                        ? {
                              borderBottomLeftRadius: theme.spacing(1),
                          }
                        : {}),
                })}
            />
            <Box
                sx={{
                    display: 'flex',
                    flex: 1,
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default Card;
