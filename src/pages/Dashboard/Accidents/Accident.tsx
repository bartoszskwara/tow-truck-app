import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { Accident as AccidentType } from 'types';
import AccidentCollapsed from './AccidentCollapsed';
import AccidentExpanded from './AccidentExpanded';
import ColorIndicator from './ColorIndicator';

interface Props extends Omit<AccidentType, 'id'> {
    expanded: boolean;
    mostRecent: boolean;
    onClick?: () => void;
}

const Accident = ({
    datetime,
    address,
    distance,
    lastUpdate,
    status,
    expanded,
    mostRecent,
    onClick,
}: Props) => (
    <Box
        sx={(theme) => ({
            borderRadius: theme.spacing(1),
            border: `1px solid ${theme.palette.border.default}`,
            background:
                status === 'missed'
                    ? theme.palette.gray[0]
                    : theme.palette.background.primary,
            display: 'flex',
            flexDirection: 'row',
            marginBottom: theme.spacing(2),
            ...(!mostRecent ? { cursor: 'pointer' } : {}),
        })}
        onClick={onClick}
    >
        <ColorIndicator status={status} />
        <Box
            sx={(theme) => ({
                flex: 1,
                padding: theme.spacing(2),
            })}
        >
            {expanded ? (
                <AccidentExpanded
                    datetime={datetime}
                    address={address}
                    distance={distance}
                    lastUpdate={lastUpdate}
                    mostRecent={mostRecent}
                    status={status}
                />
            ) : (
                <AccidentCollapsed
                    datetime={datetime}
                    distance={distance}
                    status={status}
                />
            )}
        </Box>
    </Box>
);

Accident.propTypes = {
    datetime: PropTypes.number,
    address: PropTypes.shape({
        city: PropTypes.string,
        region: PropTypes.string,
        zipcode: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        street: PropTypes.string,
        country: PropTypes.string,
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
    status: PropTypes.oneOf(['new', 'in_progress', 'completed', 'missed']),
    expanded: PropTypes.bool,
    mostRecent: PropTypes.bool,
    onClick: PropTypes.func,
};

Accident.defaultProps = {
    address: {},
    distance: {},
    status: 'new',
    expanded: false,
};

export default Accident;
