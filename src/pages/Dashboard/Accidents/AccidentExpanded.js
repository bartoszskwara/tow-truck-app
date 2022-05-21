import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';
import Text from 'components/Text';
import { useUser } from 'hooks';
import getRelativeDateTime from '../../../utilities/getRelativeDateTime';
import AccidentInfo from './AccidentInfo';
import Address from './Address';

const AccidentExpanded = ({
    datetime,
    address,
    distance,
    lastUpdate,
    mostRecent,
    status,
}) => {
    const {
        user: {
            preferences: { language },
        },
    } = useUser();
    const lastUpdateLabel = getRelativeDateTime(lastUpdate, language);
    return (
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
                        <Address address={address} />
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
                    <Text text="Show map" name="ShowMap" />
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
};

AccidentExpanded.propTypes = {
    datetime: PropTypes.number,
    address: PropTypes.shape({
        city: PropTypes.string,
        region: PropTypes.string,
        zipcode: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        street: PropTypes.string,
        country: PropTypes.string,
    }),
    distance: PropTypes.shape({
        value: PropTypes.number,
        station: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        }),
        time: PropTypes.number,
    }),
    lastUpdate: PropTypes.number,
    mostRecent: PropTypes.bool,
    status: PropTypes.string,
};

AccidentExpanded.defaultProps = {
    address: {},
    distance: {},
};

export default AccidentExpanded;
