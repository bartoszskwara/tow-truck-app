import PropTypes from 'prop-types';
import { AccidentStatus as AccidentStatusType } from 'types';
import { Address } from './Address';
import { Distance } from './Distance';

export const AccidentStatus = PropTypes.oneOf<AccidentStatusType>([
    'new',
    'in_progress',
    'completed',
    'missed',
]);

export const Accident = PropTypes.shape({
    id: PropTypes.number.isRequired,
    datetime: PropTypes.number.isRequired,
    address: Address.isRequired,
    distance: Distance.isRequired,
    lastUpdate: PropTypes.number.isRequired,
    status: AccidentStatus.isRequired,
});
