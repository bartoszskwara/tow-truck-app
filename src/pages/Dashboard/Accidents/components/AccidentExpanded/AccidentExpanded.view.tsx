import PropTypes from 'prop-types';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button } from '@mui/material';
import Text from 'components/Text';
import { LabelProps } from 'components/Text/Text.types';
import { Accident } from 'types';
import AccidentInfo from '../AccidentInfo';
import Address from '../Address';

interface Props extends Omit<Accident, 'id' | 'lastUpdate'> {
    mostRecent: boolean;
    lastUpdateLabel: LabelProps;
}

const AccidentExpandedView = ({
    datetime,
    address,
    distance,
    mostRecent,
    status,
    lastUpdateLabel,
}: Props) => (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box>
            {mostRecent && (
                <Box>
                    <Text
                        text="Most recent accident"
                        name="MostRecentAccident"
                        component="div"
                        sx={{
                            fontSize: (theme) => theme.spacing(2),
                            marginBottom: (theme) => theme.spacing(2),
                        }}
                    />
                </Box>
            )}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <Address {...address} />
                    <Text
                        text="last update: {}"
                        name="LastUpdate"
                        variables={[
                            <Text key="lastUpdate" {...lastUpdateLabel} />,
                        ]}
                        variant="light"
                        sx={{
                            color: (theme) => theme.palette.gray[100],
                        }}
                    />
                </Box>
                <AccidentInfo datetime={datetime} distance={distance} />
            </Box>
        </Box>
        <Box
            sx={{
                textAlign: 'right',
                marginTop: (theme) => theme.spacing(4),
            }}
        >
            <Button
                onClick={(e) => {
                    e.stopPropagation();
                    console.log('showing map...');
                }}
            >
                <Text text="Locate" name="Locate" />
            </Button>
            {status === 'new' && (
                <Button
                    variant="contained"
                    color="accent"
                    sx={{ marginLeft: (theme) => theme.spacing(2) }}
                    onClick={(e) => {
                        e.stopPropagation();
                        console.log('sending truck...');
                    }}
                >
                    <Text text="Send truck" name="SendTruck" />
                </Button>
            )}
        </Box>
    </Box>
);

AccidentExpandedView.propTypes = {
    datetime: PropTypes.number,
    address: PropTypes.shape({
        city: PropTypes.string.isRequired,
        region: PropTypes.string.isRequired,
        zipcode: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
    }),
    distance: PropTypes.shape({
        value: PropTypes.number,
        station: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        }),
        time: PropTypes.number,
    }),
    mostRecent: PropTypes.bool,
    status: PropTypes.oneOf(['new', 'in_progress', 'completed', 'missed']),
    lastUpdateLabel: PropTypes.shape({
        text: PropTypes.string,
        name: PropTypes.string,
        variables: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.node,
        ]),
    }),
};

AccidentExpandedView.defaultProps = {
    status: 'new',
};

export default AccidentExpandedView;
