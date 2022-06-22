import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';
import { useUser } from 'hooks';
import { Accident } from 'types';
import getRelativeDateTime from 'utilities/getRelativeDateTime';
import AccidentContext from '../../../AccidentContext';
import AccidentCollapsedView from './AccidentCollapsed.view';

const AccidentCollapsedContainer = ({
    datetime,
}: Pick<Accident, 'datetime'>) => {
    const { preferences: { language } = { language: 'en' } } = useUser();
    const dateTimeLabel = getRelativeDateTime(datetime, language);
    return <AccidentCollapsedView dateTimeLabel={dateTimeLabel} />;
};

AccidentCollapsedContainer.propTypes = {
    datetime: PropTypes.number.isRequired,
};

export default withContext(AccidentContext)(AccidentCollapsedContainer);
