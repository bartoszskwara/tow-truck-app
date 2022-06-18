import { ReactNode, useEffect } from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import StatsItem, { Props as StatsItemProps } from 'components/StatsItem';
import { Stats as StatsType } from 'types';
import StatisticsLoader from './StatisticsLoader';

const getValue = (i: StatsType): ReactNode => {
    if ('value' in i) {
        return <>{i.value}</>;
    }
    if ('available' in i) {
        return (
            <>
                <Box
                    component="span"
                    sx={{
                        color: (theme) => theme.palette.warning.main,
                    }}
                >
                    {i.available}
                </Box>{' '}
                / {i.all}
            </>
        );
    }
    return <></>;
};

interface Props {
    sx?: SxProps<Theme>;
    items: StatsType[];
    fetchData?: () => void;
    loading?: boolean;
    getLabelName: (i: StatsType) => string;
    statsItemProps?: Partial<StatsItemProps>;
}

const Statistics = ({
    sx,
    items,
    fetchData,
    loading,
    getLabelName,
    statsItemProps,
}: Props) => {
    useEffect(() => {
        if (fetchData) {
            fetchData();
        }
    }, []);

    return (
        <Box
            sx={[
                {
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: (theme) => theme.spacing(2),
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            {loading && <StatisticsLoader />}
            {items.map((i: StatsType) => (
                <StatsItem
                    key={i.type}
                    title={getLabelName(i) || ''}
                    value={getValue(i)}
                    {...statsItemProps}
                />
            ))}
        </Box>
    );
};

export default Statistics;
