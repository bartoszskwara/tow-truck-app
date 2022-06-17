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
                              borderTop: `1px solid ${theme.palette.border.default}`,
                              borderTopRightRadius: theme.spacing(1),
                          }
                        : {}),
                    ...(type === 'bottom'
                        ? {
                              borderBottomLeftRadius: theme.spacing(1),
                              borderBottom: `1px solid ${theme.palette.border.default}`,
                              borderBottomRightRadius: theme.spacing(1),
                          }
                        : {}),
                    borderLeft: `1px solid ${theme.palette.border.default}`,
                    borderRight: `1px solid ${theme.palette.border.default}`,
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
