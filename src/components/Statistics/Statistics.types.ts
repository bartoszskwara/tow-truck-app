import { SxProps, Theme } from '@mui/material';
import { Stats as StatsType } from '../../types';
import { Props as StatsItemProps } from '../StatsItem';

export interface Labels {
    [key: string]: string;
}
export interface StatisticsViewProps {
    sx?: SxProps<Theme>;
    items: StatsType[];
    loading?: boolean;
    getLabelName: (i: StatsType) => string;
    statsItemProps?: Partial<StatsItemProps>;
}
