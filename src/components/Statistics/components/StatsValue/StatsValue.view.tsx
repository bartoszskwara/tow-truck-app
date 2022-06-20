import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import { Box } from '@mui/material';
import { Stats as StatsType } from 'types';

interface Props {
    value: number;
    max?: number;
    item: StatsType;
}

const StatsValueView = ({ value, max, item }: Props) => {
    if ('value' in item) {
        return <CountUp end={value} />;
    } else if ('available' in item) {
        return (
            <>
                <Box
                    component="span"
                    sx={{
                        ...(max && Math.floor(max / 2) >= value
                            ? { color: (theme) => theme.palette.warning.main }
                            : {}),
                    }}
                >
                    <CountUp end={value} />
                </Box>{' '}
                / {item.all}
            </>
        );
    } else {
        return <></>;
    }
};

StatsValueView.propTypes = {
    value: PropTypes.number,
    max: PropTypes.number,
    item: PropTypes.oneOfType([
        PropTypes.shape({
            value: PropTypes.number,
        }),
        PropTypes.shape({
            available: PropTypes.number,
            all: PropTypes.number,
        }),
    ]),
};

export default StatsValueView;
