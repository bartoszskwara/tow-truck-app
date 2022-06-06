import PropTypes from 'prop-types';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button } from '@mui/material';
import Text from 'components/Text';
import { useUser } from '../../../hooks';
import getRelativeDateTime from '../../../utilities/getRelativeDateTime';
import getStatusColor from './getStatusColor';

const AccidentCollapsed = ({ datetime, distance, status }) => {
    const { preferences: { language } = { language: 'en' } } = useUser();
    const dateTimeLabel = getRelativeDateTime(datetime, language);
    return (
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
};

AccidentCollapsed.propTypes = {
    datetime: PropTypes.number,
    distance: PropTypes.shape({
        value: PropTypes.number,
        station: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        }),
        time: PropTypes.number,
    }),
    status: PropTypes.string,
};

AccidentCollapsed.defaultProps = {
    distance: {},
    status: 'new',
};

export default AccidentCollapsed;
