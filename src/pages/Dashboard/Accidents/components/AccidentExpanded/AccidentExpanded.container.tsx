import PropTypes from 'prop-types';
import { useUser } from 'hooks';
import { Accident } from 'types';
import getRelativeDateTime from 'utilities/getRelativeDateTime';
import AccidentExpandedView from './AccidentExpanded.view';

interface Props extends Omit<Accident, 'id'> {
    mostRecent: boolean;
}

const AccidentExpandedContainer = ({
    datetime,
    address,
    distance,
    lastUpdate,
    mostRecent,
    status,
}: Props) => {
    const { preferences: { language } = { language: 'en' } } = useUser();
    const lastUpdateLabel = getRelativeDateTime(lastUpdate, language);
    return (
        <AccidentExpandedView
            datetime={datetime}
            address={address}
            distance={distance}
            lastUpdateLabel={lastUpdateLabel}
            mostRecent={mostRecent}
            status={status}
        />
    );
};

AccidentExpandedContainer.propTypes = {
    datetime: PropTypes.number,
    address: PropTypes.shape({
        city: PropTypes.string.isRequired,
        region: PropTypes.string.isRequired,
        zipcode: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
    }),
    distance: PropTypes.shape({
        value: PropTypes.number,
        station: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        }),
        time: PropTypes.number,
    }),
    lastUpdate: PropTypes.number,
    mostRecent: PropTypes.bool,
    status: PropTypes.oneOf(['new', 'in_progress', 'completed', 'missed']),
};

AccidentExpandedContainer.defaultProps = {
    status: 'new',
};

export default AccidentExpandedContainer;
