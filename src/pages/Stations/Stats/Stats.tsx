import React, { ReactNode, useEffect } from 'react';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/store';
import Loader from 'components/Loader';
import StatsItem from 'components/StatsItem';
import { Stats as StatsType } from 'types';
import { fetchStatistics } from '../stationsSlice';
import { ValueCreatorsType, Labels } from './Stats.types';

const labels: Labels = {
    stations: 'AccidentsHandled',
    drivers: 'MilesOfTowing',
    trucks: 'TrucksAvailable',
};

const getValue = (i: StatsType): ReactNode => <>{'value' in i && i.value}</>;

const valueCreators: ValueCreatorsType = {
    stations: getValue,
    drivers: getValue,
    trucks: getValue,
};

const Stats = () => {
    const dispatch = useAppDispatch();
    const {
        stats,
        apiStatus: { stats: statsApiStatus },
    } = useAppSelector(({ stations }) => stations);

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
            {statsApiStatus === 'pending' && (
                <Box
                    sx={{
                        display: 'flex',
                        flex: 1,
                        gap: (theme) => theme.spacing(2),
                    }}
                >
                    <Loader sx={{ height: (theme) => theme.spacing(12) }} />
                    <Loader sx={{ height: (theme) => theme.spacing(12) }} />
                    <Loader sx={{ height: (theme) => theme.spacing(12) }} />
                </Box>
            )}
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
