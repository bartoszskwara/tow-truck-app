import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Text from 'components/Text';

const Address = ({ address }) => (
    <Box sx={{ fontSize: (theme) => theme.spacing(1.6) }}>
        <Text text={address.street} variant="light" />
        <br />
        <span>
            <Text
                text={`${address.city}, ${address.region} ${address.zipcode}`}
                variant="light"
            />
        </span>
        <br />
        <Text text={address.country} variant="light" />
    </Box>
);

Address.propTypes = {
    address: PropTypes.shape({
        city: PropTypes.string,
        region: PropTypes.string,
        zipcode: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        street: PropTypes.string,
        country: PropTypes.string,
    }),
};

Address.defaultProps = {
    address: {},
};

export default Address;
