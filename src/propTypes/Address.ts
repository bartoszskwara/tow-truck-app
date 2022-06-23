import PropTypes from 'prop-types';

export const Address = PropTypes.shape({
    city: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
});
