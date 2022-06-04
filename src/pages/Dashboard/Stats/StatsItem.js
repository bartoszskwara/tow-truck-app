import PropTypes from 'prop-types';
import { Paper } from '@mui/material';
import Text from 'components/Text';

const StatsItem = ({ title, value }) => (
    <Paper elevation={0} sx={{ flex: 1 }}>
        <Text
            text={value}
            variant="bold"
            sx={{ fontSize: (theme) => theme.spacing(4) }}
        />
        {title && (
            <Text name={title} variant="bold" sx={{ textAlign: 'center' }} />
        )}
    </Paper>
);

StatsItem.propTypes = {
    title: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.node,
    ]),
};

export default StatsItem;
