import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Paper, SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';
import Text from 'components/Text';

export interface Props {
    title: string;
    value: string | ReactNode;
    sxProps?: {
        root?: SxProps<Theme>;
        value?: SxProps<Theme>;
        title?: SxProps<Theme>;
    };
}

const StatsItem = ({ title, value, sxProps }: Props) => (
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
                    ...(sxProps
                        ? Array.isArray(sxProps.title)
                            ? sxProps.title
                            : [sxProps.title]
                        : []),
                ]}
            />
        )}
    </Paper>
);

StatsItem.propTypes = {
    title: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.node,
    ]),
};

export default StatsItem;
