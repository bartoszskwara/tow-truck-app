import PropTypes from 'prop-types';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button } from '@mui/material';
import Text from 'components/Text';
import getStatusColor from './getStatusColor';

const AccidentCollapsed = ({ datetime, distance, status }) => {
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
                text={datetime}
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
                    <Button variant="contained" color="accent">
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
