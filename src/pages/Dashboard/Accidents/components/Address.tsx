import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Text from 'components/Text';
import { Address as AddressType } from 'types';

const Address = ({ street, city, region, zipcode, country }: AddressType) => (
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
    city: PropTypes.string,
    region: PropTypes.string,
    zipcode: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    street: PropTypes.string,
    country: PropTypes.string,
};

Address.defaultProps = {
    address: {},
};

export default Address;
