import { useEffect } from 'react';
import { StatisticsViewProps } from './Statistics.types';
import StatisticsView from './Statistics.view';

interface Props extends StatisticsViewProps {
    fetchData?: () => void;
}

const Statistics = ({ fetchData, ...rest }: Props) => {
    useEffect(() => {
        if (fetchData) {
            fetchData();
        }
    }, []);

    return <StatisticsView {...rest} />;
};

export default Statistics;
