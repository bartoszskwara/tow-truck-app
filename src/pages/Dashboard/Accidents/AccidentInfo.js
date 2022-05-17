import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import InfoBox from './InfoBox';

const AccidentInfo = ({ datetime, distance }) => (
    <Box sx={{ textAlign: 'right' }}>
        <InfoBox
            headerLabel={{
                text: '{} miles',
                name: 'Miles',
            }}
            headerValue={distance.value}
            subtitleLabel={{
                text: 'from: {}',
                name: 'From',
            }}
            subtitleValue={distance.station.name}
        />
        <InfoBox
            headerLabel={{
                text: '{} minutes ago',
                name: 'MinutesAgo',
            }}
            headerValue={datetime}
            subtitleLabel={{
                text: 'fastest arrival: {}',
                name: 'FastestArrival',
            }}
            subtitleValue={distance.time + 1000 * 60 * 20}
            sx={{ marginTop: (theme) => theme.spacing(2) }}
        />
    </Box>
);

AccidentInfo.propTypes = {
    datetime: PropTypes.number,
    distance: PropTypes.shape({
        value: PropTypes.number,
        station: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        }),
        time: PropTypes.number,
    }),
};

AccidentInfo.defaultProps = {
    distance: {},
};

export default AccidentInfo;
