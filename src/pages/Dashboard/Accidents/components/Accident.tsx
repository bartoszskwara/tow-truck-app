import React from 'react';
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

const Accident = React.forwardRef<HTMLDivElement, Props>(
    (
        {
            datetime,
            address,
            distance,
            lastUpdate,
            status,
            expanded,
            mostRecent,
            onClick,
            ...rest
        },
        ref
    ) => (
        <Box
            sx={(theme) => ({
                borderRadius: theme.spacing(1),
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
            ref={ref}
            {...rest}
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
    )
);
Accident.displayName = 'Accident';

Accident.propTypes = {
    datetime: PropTypes.number.isRequired,
    address: PropTypes.shape({
        city: PropTypes.string.isRequired,
        region: PropTypes.string.isRequired,
        zipcode: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
    }).isRequired,
    distance: PropTypes.shape({
        value: PropTypes.number.isRequired,
        station: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired,
        time: PropTypes.number.isRequired,
    }).isRequired,
    lastUpdate: PropTypes.number.isRequired,
    status: PropTypes.oneOf([
        'new',
        'in_progress',
        'completed',
        'missed',
    ] as const).isRequired,
    expanded: PropTypes.bool.isRequired,
    mostRecent: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
};

Accident.defaultProps = {
    status: 'new',
    expanded: false,
};

export default Accident;
