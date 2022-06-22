import PropTypes from 'prop-types';
import { useUser } from 'hooks';
import { Accident } from 'types';
import getRelativeDateTime from 'utilities/getRelativeDateTime';
import withContext from '../../../../../../hoc/withContext';
import AccidentContext from '../../../AccidentContext';
import AccidentExpandedView from './AccidentExpanded.view';

interface Props {
    mostRecent: boolean;
}
interface PropsWithContext extends Props, Pick<Accident, 'lastUpdate'> {}

const AccidentExpandedContainer = ({
    lastUpdate,
    mostRecent,
}: PropsWithContext) => {
    const { preferences: { language } = { language: 'en' } } = useUser();
    const lastUpdateLabel = getRelativeDateTime(lastUpdate, language);
    return (
        <AccidentExpandedView
            lastUpdateLabel={lastUpdateLabel}
            mostRecent={mostRecent}
        />
    );
};

AccidentExpandedContainer.propTypes = {
    lastUpdate: PropTypes.number.isRequired,
    mostRecent: PropTypes.bool.isRequired,
};

export default withContext<Props, Accident>(AccidentContext)(
    AccidentExpandedContainer
);
