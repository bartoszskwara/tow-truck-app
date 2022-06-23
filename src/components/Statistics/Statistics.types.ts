import PropTypes from 'prop-types';
import { StatsPropType, SxPropType } from 'propTypes';
import { Stats as StatsType, Sx } from 'types';
import { StatsItemProps, StatsItemPropTypes } from '../StatsItem';

export interface Labels {
    [key: string]: string;
}
export interface StatisticsViewProps {
    sx?: Sx;
    items: StatsType[];
    loading?: boolean;
    getLabelName: (i: StatsType) => string;
    statsItemProps?: Partial<StatsItemProps>;
}
export const StatisticsViewPropTypes = {
    sx: SxPropType,
    items: PropTypes.arrayOf(StatsPropType.isRequired).isRequired,
    loading: PropTypes.bool,
    getLabelName: PropTypes.func.isRequired,
    statsItemProps: StatsItemPropTypes,
};
