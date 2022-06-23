import { Box } from '@mui/material';
import Text, { LabelProps, LabelPropType } from 'components/Text';
import withContext from 'hoc/withContext';
import { AccidentStatusPropType, DistancePropType } from 'propTypes';
import { Accident } from 'types';
import AccidentContext from '../../../AccidentContext';
import InfoBox from './InfoBox';

interface Props {
    dateTimeLabel: LabelProps;
    arrivalDateTimeLabel: LabelProps;
}

interface PropsWithContext
    extends Props,
        Pick<Accident, 'distance' | 'status'> {}

const AccidentInfoView = ({
    dateTimeLabel,
    arrivalDateTimeLabel,
    distance,
    status,
}: PropsWithContext) => (
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
    dateTimeLabel: LabelPropType.isRequired,
    arrivalDateTimeLabel: LabelPropType.isRequired,
    distance: DistancePropType.isRequired,
    status: AccidentStatusPropType.isRequired,
};

export default withContext<Props, Accident>(AccidentContext)(AccidentInfoView);
