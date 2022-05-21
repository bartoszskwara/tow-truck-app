import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { useUser } from 'hooks';
import getRelativeDateTime from 'utilities/getRelativeDateTime';
import Text from '../../../components/Text';
import InfoBox from './InfoBox';

const AccidentInfo = ({ datetime, distance }) => {
    const {
        user: {
            preferences: { language },
        },
    } = useUser();
    const dateTimeLabel = getRelativeDateTime(datetime, language);
    const arrivalDateTimeLabel = getRelativeDateTime(
        new Date().getTime() + distance.time,
        language
    );
    return (
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
                headerLabel={dateTimeLabel}
                headerValue={dateTimeLabel.variables?.[0]}
                subtitleLabel={{
                    text: 'fastest arrival: {}',
                    name: 'FastestArrival',
                }}
                subtitleValue={
                    <Text key="fastestArrival" {...arrivalDateTimeLabel} />
                }
                sx={{ marginTop: (theme) => theme.spacing(2) }}
            />
        </Box>
    );
};

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
