import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    StatisticsViewProps,
    StatisticsViewPropTypes,
} from './Statistics.types';
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

Statistics.propTypes = {
    fetchData: PropTypes.func,
    ...StatisticsViewPropTypes,
};

export default Statistics;
