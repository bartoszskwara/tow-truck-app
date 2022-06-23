import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import withContext from 'hoc/withContext';
import {
    AccidentStatusPropType,
    AddressPropType,
    DistancePropType,
} from 'propTypes';
import { Accident, Accident as AccidentType } from 'types';
import AccidentContext from '../AccidentContext';
import AccidentCollapsed from './components/AccidentCollapsed';
import AccidentExpanded from './components/AccidentExpanded';
import ColorIndicator from './components/ColorIndicator';

interface Props {
    expanded: boolean;
    mostRecent: boolean;
    onClick?: () => void;
}
interface PropsWithContext extends Props, Omit<AccidentType, 'id'> {}

const AccidentCard = React.forwardRef<HTMLDivElement, PropsWithContext>(
    (
        {
            datetime,
            address,
            distance,
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
            <ColorIndicator />
            <Box
                sx={(theme) => ({
                    flex: 1,
                    padding: theme.spacing(2),
                })}
            >
                {expanded ? (
                    <AccidentExpanded mostRecent={mostRecent} />
                ) : (
                    <AccidentCollapsed />
                )}
            </Box>
        </Box>
    )
);
AccidentCard.displayName = 'Accident';

AccidentCard.propTypes = {
    datetime: PropTypes.number.isRequired,
    address: AddressPropType.isRequired,
    distance: DistancePropType.isRequired,
    status: AccidentStatusPropType.isRequired,
    expanded: PropTypes.bool.isRequired,
    mostRecent: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
};

AccidentCard.defaultProps = {
    status: 'new',
    expanded: false,
};

export default withContext<Props, Accident>(AccidentContext)(AccidentCard);
