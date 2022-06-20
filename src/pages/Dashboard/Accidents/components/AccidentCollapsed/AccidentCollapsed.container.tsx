import PropTypes from 'prop-types';
import { useUser } from 'hooks';
import { Accident } from 'types';
import getRelativeDateTime from 'utilities/getRelativeDateTime';
import AccidentCollapsedView from './AccidentCollapsed.view';

const AccidentCollapsedContainer = ({
    datetime,
    distance,
    status,
}: Pick<Accident, 'datetime' | 'distance' | 'status'>) => {
    const { preferences: { language } = { language: 'en' } } = useUser();
    const dateTimeLabel = getRelativeDateTime(datetime, language);
    return (
        <AccidentCollapsedView
            dateTimeLabel={dateTimeLabel}
            distance={distance}
            status={status}
        />
    );
};

AccidentCollapsedContainer.propTypes = {
    datetime: PropTypes.number,
    distance: PropTypes.shape({
        value: PropTypes.number,
        station: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        }),
        time: PropTypes.number,
    }),
    status: PropTypes.oneOf(['new', 'in_progress', 'completed', 'missed']),
};

AccidentCollapsedContainer.defaultProps = {
    distance: {},
    status: 'new',
};

export default AccidentCollapsedContainer;
