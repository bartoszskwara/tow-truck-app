import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { AccidentStatus } from '../../../types';
import getStatusColor from './getStatusColor';

interface Props {
    status: AccidentStatus;
}

const ColorIndicator = ({ status }: Props) => (
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
    status: PropTypes.oneOf(['new', 'in_progress', 'completed', 'missed']),
};

export default ColorIndicator;
