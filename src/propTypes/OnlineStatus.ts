import PropTypes from 'prop-types';
import { OnlineStatus as OnlineStatusType } from 'types';

export const OnlineStatus = PropTypes.oneOf<OnlineStatusType>([
    'online',
    'offline',
    'driving',
]);
