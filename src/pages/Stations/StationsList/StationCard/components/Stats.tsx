import PropTypes from 'prop-types';
import Statistics from 'components/Statistics';
import { Labels } from 'components/Statistics/Statistics.types';
import withContext from 'hoc/withContext';
import { StatsPropType } from 'propTypes';
import { Station, Stats as StatsType } from 'types';
import StationContext from '../../StationContext';

const labels: Labels = {
    accidents: 'Accidents',
    drivers: 'Drivers',
    trucks: 'Trucks',
};

const Stats = ({ stats }: Pick<Station, 'stats'>) => (
    <Statistics
        items={stats}
        getLabelName={(i: StatsType) => labels[i.type]}
        sx={{
            marginRight: (theme) => theme.spacing(6),
        }}
        statsItemProps={{
            sxProps: {
                root: (theme) => ({
                    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
                    minWidth: theme.spacing(10),
                    boxSizing: 'border-box',
                }),
                value: (theme) => ({
                    fontSize: theme.spacing(2),
                }),
                title: (theme) => ({
                    fontSize: theme.spacing(1.2),
                }),
            },
        }}
    />
);

Stats.propTypes = {
    stats: PropTypes.arrayOf(StatsPropType.isRequired).isRequired,
};

export default withContext(StationContext)(Stats);
