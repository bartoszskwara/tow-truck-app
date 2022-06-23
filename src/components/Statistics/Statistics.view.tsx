import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import StatsItem from 'components/StatsItem';
import { Stats as StatsType } from 'types';
import StatisticsLoader from './components/Loader';
import StatsValue from './components/StatsValue';
import {
    StatisticsViewProps,
    StatisticsViewPropTypes,
} from './Statistics.types';

const StatisticsView = ({
    sx,
    items,
    loading,
    getLabelName,
    statsItemProps,
}: StatisticsViewProps) => (
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
        {!loading &&
            items.map((i: StatsType) => (
                <StatsItem
                    key={i.type}
                    title={getLabelName(i) || ''}
                    value={<StatsValue item={i} />}
                    {...statsItemProps}
                />
            ))}
    </Box>
);

StatisticsView.propTypes = PropTypes.shape(StatisticsViewPropTypes).isRequired;

export default StatisticsView;
