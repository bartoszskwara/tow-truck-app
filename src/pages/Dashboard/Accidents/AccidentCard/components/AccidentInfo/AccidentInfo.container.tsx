import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';
import { useUser } from 'hooks';
import { DistancePropType } from 'propTypes';
import { Accident } from 'types';
import getRelativeDateTime from 'utilities/getRelativeDateTime';
import AccidentContext from '../../../AccidentContext';
import AccidentInfoView from './AccidentInfo.view';

const AccidentInfo = ({
    datetime,
    distance,
}: Pick<Accident, 'datetime' | 'distance'>) => {
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
        />
    );
};

AccidentInfo.propTypes = {
    datetime: PropTypes.number.isRequired,
    distance: DistancePropType.isRequired,
};

export default withContext(AccidentContext)(AccidentInfo);
