import React from 'react';
import { Fade, Paper } from '@mui/material';
import Text from 'components/Text';
import { StatsItemProps, StatsItemPropTypes } from './StatsItem.types';

const StatsItem = ({ title, value, sxProps }: StatsItemProps) => (
    <Fade in={true}>
        <Paper
            elevation={0}
            sx={[
                { flex: 1 },
                ...(sxProps
                    ? Array.isArray(sxProps.root)
                        ? sxProps.root
                        : [sxProps.root]
                    : []),
            ]}
        >
            <Text
                text={value}
                variant="bold"
                sx={[
                    { fontSize: (theme) => theme.spacing(4) },
                    ...(sxProps
                        ? Array.isArray(sxProps.value)
                            ? sxProps.value
                            : [sxProps.value]
                        : []),
                ]}
            />
            {title && (
                <Text
                    name={title}
                    variant="bold"
                    sx={[
                        {
                            textAlign: 'center',
                        },
                        ...(sxProps
                            ? Array.isArray(sxProps.title)
                                ? sxProps.title
                                : [sxProps.title]
                            : []),
                    ]}
                />
            )}
        </Paper>
    </Fade>
);

StatsItem.propTypes = StatsItemPropTypes.isRequired;

export default StatsItem;
