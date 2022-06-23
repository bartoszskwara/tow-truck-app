import PropTypes from 'prop-types';

export const Sx = PropTypes.oneOfType([
    PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
]);
