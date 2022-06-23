import PropTypes from 'prop-types';
import { ApiStatus as ApiStatusType } from 'types';

export const ApiStatus = PropTypes.oneOf<ApiStatusType>([
    'idle',
    'pending',
    'success',
    'failed',
]);
