import { ReactNode, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Stats as StatsType } from 'types';
import StatsItem from './StatsItem';
import { ValueCreatorsType, Labels } from './types.d';

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
    const [stats, setStats] = useState([]);

    useEffect(() => {
        const fetchStatistics = async () => {
            const response = await fetch('./mockApi/stats.json').then((res) =>
                res.json()
            );
            if (response) {
                setStats(response.stats);
            }
        };
        fetchStatistics();
    }, []);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
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
