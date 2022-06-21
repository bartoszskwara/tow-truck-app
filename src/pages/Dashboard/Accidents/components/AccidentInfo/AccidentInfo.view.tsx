import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Text from 'components/Text';
import { LabelProps } from 'components/Text/Text.types';
import { Accident } from 'types';
import InfoBox from './InfoBox';

interface Props extends Pick<Accident, 'distance' | 'status'> {
    dateTimeLabel: LabelProps;
    arrivalDateTimeLabel: LabelProps;
}

const AccidentInfoView = ({
    dateTimeLabel,
    arrivalDateTimeLabel,
    distance,
    status,
}: Props) => (
    <Box sx={{ textAlign: 'right' }}>
        <InfoBox
            headerLabel={{
                text: '{} miles',
                name: 'Miles',
            }}
            headerValue={distance?.value}
            subtitleLabel={{
                text: 'from: {}',
                name: 'From',
            }}
            subtitleValue={distance.station.name}
            status={status}
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
            status={status}
        />
    </Box>
);

AccidentInfoView.propTypes = {
    dateTimeLabel: PropTypes.shape({
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        name: PropTypes.string,
        variables: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.node,
        ]),
    }),
    arrivalDateTimeLabel: PropTypes.shape({
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        name: PropTypes.string,
        variables: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.node,
        ]),
    }),
    distance: PropTypes.shape({
        value: PropTypes.number.isRequired,
        station: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        }).isRequired,
        time: PropTypes.number.isRequired,
    }).isRequired,
    status: PropTypes.oneOf(['new', 'in_progress', 'completed', 'missed']).isRequired,
};

export default AccidentInfoView;
