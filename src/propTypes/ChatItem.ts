import PropTypes from 'prop-types';
import { ChatType as ChatTypeType } from '../types/ChatItem';
import { OnlineStatus } from './OnlineStatus';

export const ChatType = PropTypes.oneOf<ChatTypeType>(['station', 'driver']);

export const ChatItem = PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: OnlineStatus.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    type: ChatType.isRequired,
    notifications: PropTypes.number,
});
