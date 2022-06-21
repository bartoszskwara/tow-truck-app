import PropTypes from 'prop-types';
import { useUser } from 'hooks';
import { Accident } from 'types';
import getRelativeDateTime from 'utilities/getRelativeDateTime';
import AccidentInfoView from './AccidentInfo.view';

const AccidentInfo = ({
    datetime,
    distance,
    status,
}: Pick<Accident, 'datetime' | 'distance' | 'status'>) => {
    const { preferences: { language } = { language: 'en' } } = useUser();
    const dateTimeLabel = getRelativeDateTime(datetime, language);
    const arrivalDateTimeLabel = getRelativeDateTime(
        new Date().getTime() + distance?.time,
        language
    );
    return (
        <AccidentInfoView
            dateTimeLabel={dateTimeLabel}
            arrivalDateTimeLabel={arrivalDateTimeLabel}
            distance={distance}
            status={status}
        />
    );
};

AccidentInfo.propTypes = {
    datetime: PropTypes.number,
    distance: PropTypes.shape({
        value: PropTypes.number,
        station: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        }),
        time: PropTypes.number,
    }),
    status: PropTypes.oneOf(['new', 'in_progress', 'completed', 'missed']).isRequired,
};

AccidentInfo.defaultProps = {
    distance: {},
};

export default AccidentInfo;
