import React from 'react';
import { Box } from '@mui/material';
import { History, Sx } from 'types';
import getHoursAndMinutes from 'utilities/getHoursAndMinutes';
import getStatusColor from 'utilities/getStatusColor';
import DetailsItem from './DetailsItem';
import Driver from './Driver';

interface Props {
    data: History;
    sx?: Sx;
}

const HistoryDetails = ({
    data: { status, mileage, duration, driver },
    sx,
}: Props) => {
    const time = getHoursAndMinutes(duration);
    const durationLabelName = time.hours
        ? 'DurationValueHoursMinutes'
        : 'DurationValueMinutes';
    return (
        <Box
            sx={[
                {
                    paddingY: (theme) => theme.spacing(2),
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            <Box>
                <DetailsItem
                    titleLabel={{ name: 'Status' }}
                    valueLabel={{ name: status }}
                    sxProps={{
                        value: {
                            color: (theme) => getStatusColor(theme, status),
                        },
                    }}
                />
                <DetailsItem
                    titleLabel={{ name: 'Mileage' }}
                    valueLabel={{ name: 'Miles', variables: [mileage] }}
                />
                <DetailsItem
                    titleLabel={{ name: 'Duration' }}
                    valueLabel={{
                        name: durationLabelName,
                        variables: [
                            ...(time.hours ? [time.hours] : []),
                            time.minutes,
                        ],
                    }}
                    valueUppercase={false}
                />
            </Box>
            <Driver {...driver} />
        </Box>
    );
};

export default HistoryDetails;
