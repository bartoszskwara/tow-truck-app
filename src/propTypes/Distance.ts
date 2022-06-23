import PropTypes from 'prop-types';

export const Distance = PropTypes.shape({
    value: PropTypes.number.isRequired,
    station: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    time: PropTypes.number.isRequired,
});
