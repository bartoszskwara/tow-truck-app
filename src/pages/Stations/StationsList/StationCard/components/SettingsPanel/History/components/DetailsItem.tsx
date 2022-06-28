import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Text, { LabelProps, LabelPropType } from 'components/Text';
import { SxPropType } from 'propTypes';
import { Sx } from 'types';

interface Props {
    titleLabel: LabelProps;
    valueLabel: LabelProps;
    sxProps?: {
        title?: Sx;
        value?: Sx;
    };
    valueUppercase: boolean;
}

const DetailsItem = ({
    titleLabel,
    valueLabel,
    sxProps,
    valueUppercase,
}: Props) => (
    <Box
        sx={{
            marginBottom: (theme) => theme.spacing(1),
        }}
    >
        <Text
            sx={[
                {
                    margin: 0,
                    padding: 0,
                    color: (theme) => theme.palette.text.secondary,
                    fontSize: (theme) => theme.spacing(1),
                    textTransform: 'uppercase',
                },
                ...(sxProps
                    ? Array.isArray(sxProps.title)
                        ? sxProps.title
                        : [sxProps.title]
                    : []),
            ]}
            component="p"
            variant="bold"
            {...titleLabel}
        />
        <Text
            sx={[
                {
                    margin: 0,
                    padding: (theme) => `${theme.spacing(0.5)} 0`,
                    fontSize: (theme) => theme.spacing(1.4),
                    ...(valueUppercase ? { textTransform: 'uppercase' } : {}),
                },
                ...(sxProps
                    ? Array.isArray(sxProps.value)
                        ? sxProps.value
                        : [sxProps.value]
                    : []),
            ]}
            component="p"
            variant="bold"
            {...valueLabel}
        />
    </Box>
);

DetailsItem.propTypes = {
    titleLabel: LabelPropType,
    valueLabel: LabelPropType,
    sxProps: SxPropType,
    valueUppercase: PropTypes.bool,
};
DetailsItem.defaultProps = {
    valueUppercase: true,
};

export default DetailsItem;
