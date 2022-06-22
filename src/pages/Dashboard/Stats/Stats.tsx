import { useAppDispatch, useAppSelector } from 'app/store';
import Statistics from 'components/Statistics';
import { Labels } from 'components/Statistics/Statistics.types';
import { Stats as StatsType } from 'types';
import { fetchStatistics } from '../store/dashboardSlice';

const labels: Labels = {
    accidents: 'AccidentsHandled',
    towing: 'MilesOfTowing',
    trucks: 'TrucksAvailable',
};

const Stats = () => {
    const dispatch = useAppDispatch();
    const { stats, apiStatus } = useAppSelector(({ dashboard }) => dashboard);
    const statsLoading = apiStatus.stats === 'pending';

    return (
        <Statistics
            items={stats}
            fetchData={() => dispatch(fetchStatistics())}
            loading={statsLoading}
            getLabelName={(i: StatsType) => labels[i.type]}
        />
    );
};

export default Stats;
