import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { Box } from '@mui/material';
import { Stats as StatsType } from 'types';

interface Props {
    item: StatsType;
}

const StatsValue = ({ item }: Props) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if ('value' in item) {
            setValue(item.value);
        } else if ('available' in item) {
            setValue(item.available);
        }
    }, []);

    if ('value' in item) {
        return <CountUp end={value} />;
    } else if ('available' in item) {
        return (
            <>
                <Box
                    component="span"
                    sx={{
                        color: (theme) => theme.palette.warning.main,
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

export default StatsValue;
