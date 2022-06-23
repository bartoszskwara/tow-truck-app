import PropTypes from 'prop-types';

export const Stats = PropTypes.oneOfType([
    PropTypes.shape({
        type: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
    }).isRequired,
    PropTypes.shape({
        type: PropTypes.string.isRequired,
        available: PropTypes.number.isRequired,
        all: PropTypes.number.isRequired,
    }).isRequired,
]);
