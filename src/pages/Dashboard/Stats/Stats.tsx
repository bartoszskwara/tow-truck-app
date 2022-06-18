import { useEffect } from 'react';
import { Labels } from 'components/Statistics/Statistics.types';
import { Stats as StatsType } from 'types';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import Statistics from '../../../components/Statistics';
import { fetchStatistics } from '../dashboardSlice';

const labels: Labels = {
    accidents: 'AccidentsHandled',
    towing: 'MilesOfTowing',
    trucks: 'TrucksAvailable',
};

const Stats = () => {
    const dispatch = useAppDispatch();
    const { stats, apiStatus } = useAppSelector(({ dashboard }) => dashboard);
    const statsLoading = apiStatus.stats === 'pending';

    useEffect(() => {
        dispatch(fetchStatistics());
    }, []);

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
