import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import StatsItem from './StatsItem';

const labels = {
    accidents: 'AccidentsHandled',
    towing: 'MilesOfTowing',
    trucks: 'TrucksAvailable',
};

const valueCreators = {
    accidents: (i) => i.value,
    towing: (i) => i.value,
    trucks: (i) => (
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
    ),
};

const Stats = () => {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        const fetchStatistics = async () => {
            const response = await fetch('./stats.json').then((res) =>
                res.json()
            );
            if (response) {
                setStats(response.stats);
            }
        };
        fetchStatistics();
    }, []);

    return (
        <Box sx={{ display: 'flex', gap: 2 }}>
            {stats.map((i) => {
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
