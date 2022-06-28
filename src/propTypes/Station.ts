import PropTypes from 'prop-types';
import { Address } from './Address';
import { OnlineStatus } from './OnlineStatus';
import { Person } from './Person';
import { Stats } from './Stats';

export const Station = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    status: OnlineStatus.isRequired,
    manager: Person.isRequired,
    members: PropTypes.arrayOf(Person.isRequired).isRequired,
    stats: PropTypes.arrayOf(Stats.isRequired).isRequired,
    address: Address.isRequired,
    color: PropTypes.string.isRequired,
});
