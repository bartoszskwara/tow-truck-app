import { ReactNode, useEffect } from 'react';
import { Box } from '@mui/material';
import StatsItem from 'components/StatsItem';
import { Stats as StatsType } from 'types';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import { fetchStatistics } from '../dashboardSlice';
import { ValueCreatorsType, Labels } from './Stats.types';
import StatsLoader from './StatsLoader';

const labels: Labels = {
    accidents: 'AccidentsHandled',
    towing: 'MilesOfTowing',
    trucks: 'TrucksAvailable',
};

const getValue = (i: StatsType): ReactNode => <>{'value' in i && i.value}</>;

const valueCreators: ValueCreatorsType = {
    accidents: getValue,
    towing: getValue,
    trucks: (i) => (
        <>
            {'available' in i && (
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
            )}
        </>
    ),
};

const Stats = () => {
    const dispatch = useAppDispatch();
    const { stats, apiStatus } = useAppSelector(({ dashboard }) => dashboard);
    const statsLoading = apiStatus.stats === 'pending';

    useEffect(() => {
        dispatch(fetchStatistics());
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: (theme) => theme.spacing(2),
            }}
        >
            {statsLoading && <StatsLoader />}
            {stats.map((i: StatsType) => {
                const createValue = valueCreators[i.type];
                return (
                    <StatsItem
                        key={i.type}
                        title={labels[i.type] || ''}
                        value={createValue(i)}
                    />
                );
            })}
        </Box>
    );
};

export default Stats;
