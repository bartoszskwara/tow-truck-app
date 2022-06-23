import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button } from '@mui/material';
import Text, { LabelProps, LabelPropType } from 'components/Text';
import withContext from 'hoc/withContext';
import { AccidentStatusPropType, DistancePropType } from 'propTypes';
import { Accident } from 'types';
import AccidentContext from '../../../AccidentContext';
import getStatusColor from '../../../helpers/getStatusColor';

interface Props {
    dateTimeLabel: LabelProps;
}
interface PropsWithContext
    extends Props,
        Pick<Accident, 'distance' | 'status'> {
    dateTimeLabel: LabelProps;
}

const AccidentCollapsedView = ({
    dateTimeLabel,
    distance,
    status,
}: PropsWithContext) => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}
    >
        <Text
            {...dateTimeLabel}
            variant="bold"
            sx={{
                fontSize: (theme) => theme.spacing(2),
                flex: 1,
                ...(status === 'missed'
                    ? { color: (theme) => getStatusColor(theme, status) }
                    : {}),
            }}
        />
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                flex: 2,
            }}
        >
            <Text
                text="{} miles away"
                name="MilesAway"
                variables={[distance.value]}
                variant="bold"
                sx={{
                    fontSize: (theme) => theme.spacing(2),
                    ...(status === 'missed'
                        ? { color: (theme) => getStatusColor(theme, status) }
                        : {}),
                }}
            />
            {status === 'new' && (
                <Button
                    variant="contained"
                    color="accent"
                    onClick={(e) => {
                        e.stopPropagation();
                        console.log('sending truck...');
                    }}
                >
                    <ArrowForwardIcon />
                </Button>
            )}
            {status !== 'new' && (
                <Text
                    name={status}
                    variant="bold"
                    sx={{
                        textTransform: 'uppercase',
                        fontSize: (theme) => theme.spacing(2),
                        color: (theme) => getStatusColor(theme, status),
                    }}
                />
            )}
        </Box>
    </Box>
);

AccidentCollapsedView.propTypes = {
    dateTimeLabel: LabelPropType.isRequired,
    distance: DistancePropType.isRequired,
    status: AccidentStatusPropType.isRequired,
};

export default withContext<Props, Accident>(AccidentContext)(
    AccidentCollapsedView
);
