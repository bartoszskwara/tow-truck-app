import { useAppDispatch, useAppSelector } from 'app/store';
import { Labels } from 'components/Statistics/Statistics.types';
import { Stats as StatsType } from 'types';
import Statistics from '../../../components/Statistics';
import { fetchStatistics } from '../stationsSlice';

const labels: Labels = {
    stations: 'Stations',
    drivers: 'Drivers',
    trucks: 'Trucks',
};

const Stats = () => {
    const dispatch = useAppDispatch();
    const { stats, apiStatus } = useAppSelector(({ stations }) => stations);
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
