type StatsType = {
    type: string;
};
type ValueStats = StatsType & {
    value: number;
};
type AvailableStats = StatsType & {
    available: number;
    all: number;
};
export type Stats = ValueStats | AvailableStats;
