import { ReactNode, useContext } from 'react';
import { Box, SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { Station, Stats as StatsType } from 'types';
import StatsItem from '../../../../components/StatsItem';
import { Labels, ValueCreatorsType } from '../../../Dashboard/Stats/types.d';
import { StationContext } from '../StationsList';

const labels: Labels = {
    accidents: 'Accidents',
    drivers: 'Drivers',
    trucks: 'Trucks',
};

const getValue = (i: StatsType) => (
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
);

const valueCreators: ValueCreatorsType = {
    accidents: (i: StatsType): ReactNode => <>{'value' in i && i.value}</>,
    drivers: getValue,
    trucks: getValue,
};

const Stats = () => {
    const { stats = [] } = useContext<Partial<Station>>(StationContext);
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: (theme) => theme.spacing(2),
                marginRight: (theme) => theme.spacing(6),
            }}
        >
            {stats.map((i: StatsType) => {
                const createValue = valueCreators[i.type];
                return (
                    <StatsItem
                        key={`station_stats_${i.type}`}
                        title={labels[i.type] || ''}
                        value={createValue(i)}
                        sxProps={{
                            root: (theme) => ({
                                padding: `${theme.spacing(1)} ${theme.spacing(
                                    2
                                )}`,
                                minWidth: theme.spacing(10),
                                boxSizing: 'border-box',
                            }),
                            value: (theme) => ({
                                fontSize: theme.spacing(2),
                            }),
                            title: (theme) => ({
                                fontSize: theme.spacing(1.2),
                            }),
                        }}
                    />
                );
            })}
        </Box>
    );
};

export default Stats;
