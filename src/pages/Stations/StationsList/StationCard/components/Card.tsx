import { ReactNode } from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import withContext from 'hoc/withContext';
import { Station } from 'types';
import StationContext from '../../StationContext';

interface Props {
    type: 'top' | 'bottom';
    children: ReactNode;
    sx?: SxProps<Theme>;
}
interface PropsWithContext extends Props, Pick<Station, 'color'> {}

const Card = ({ color, type, children, sx }: PropsWithContext) => (
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

export default withContext<Props, Station>(StationContext)(Card);
