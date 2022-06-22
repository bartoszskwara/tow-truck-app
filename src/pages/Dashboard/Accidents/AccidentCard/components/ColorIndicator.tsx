import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import withContext from 'hoc/withContext';
import { Accident } from 'types';
import AccidentContext from '../../AccidentContext';
import getStatusColor from '../../helpers/getStatusColor';

const ColorIndicator = ({ status }: Pick<Accident, 'status'>) => (
    <Box
        sx={(theme) => ({
            background: getStatusColor(theme, status),
            width: theme.spacing(2),
            borderBottomLeftRadius: theme.spacing(1),
            borderTopLeftRadius: theme.spacing(1),
        })}
    />
);

ColorIndicator.propTypes = {
    status: PropTypes.oneOf([
        'new',
        'in_progress',
        'completed',
        'missed',
    ] as const).isRequired,
};

export default withContext(AccidentContext)(ColorIndicator);
