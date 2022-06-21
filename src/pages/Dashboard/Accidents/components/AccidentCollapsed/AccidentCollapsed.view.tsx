import PropTypes from 'prop-types';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button } from '@mui/material';
import Text from 'components/Text';
import { LabelProps } from 'components/Text/Text.types';
import { Accident } from 'types';
import getStatusColor from '../../helpers/getStatusColor';

interface Props extends Pick<Accident, 'distance' | 'status'> {
    dateTimeLabel: LabelProps;
}

const AccidentCollapsedView = ({ dateTimeLabel, distance, status }: Props) => (
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
    dateTimeLabel: PropTypes.shape({
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        name: PropTypes.string,
        variables: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.node,
        ]),
    }),
    distance: PropTypes.shape({
        value: PropTypes.number,
        station: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        }),
        time: PropTypes.number,
    }),
    status: PropTypes.oneOf(['new', 'in_progress', 'completed', 'missed']),
};

AccidentCollapsedView.defaultProps = {
    distance: {},
    status: 'new',
};

export default AccidentCollapsedView;
