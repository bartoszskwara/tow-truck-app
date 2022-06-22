import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Text from 'components/Text';
import withContext from 'hoc/withContext';
import { Accident } from 'types';
import AccidentContext from '../../../AccidentContext';

const Address = ({
    address: { street, city, region, zipcode, country },
}: Pick<Accident, 'address'>) => (
    <Box sx={{ fontSize: (theme) => theme.spacing(1.6) }}>
        <Text text={street} variant="light" />
        <br />
        <span>
            <Text text={`${city}, ${region} ${zipcode}`} variant="light" />
        </span>
        <br />
        <Text text={country} variant="light" />
    </Box>
);

Address.propTypes = {
    address: PropTypes.shape({
        city: PropTypes.string.isRequired,
        region: PropTypes.string.isRequired,
        zipcode: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
    }).isRequired,
};

export default withContext(AccidentContext)(Address);
