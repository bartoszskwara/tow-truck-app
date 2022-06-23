import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Text from 'components/Text';
import withContext from 'hoc/withContext';
import { PersonPropType } from 'propTypes';
import { Station } from 'types';
import StationContext from '../../StationContext';

const Title = ({ name, manager }: Pick<Station, 'name' | 'manager'>) => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: (theme) => theme.spacing(2),
        }}
    >
        <Text
            text={name}
            sx={{
                fontSize: (theme) => theme.spacing(2),
            }}
        />
        <Text
            text="manager: {}"
            name="Manager"
            variables={[manager?.name]}
            sx={{ color: (theme) => theme.palette.gray[70] }}
        />
    </Box>
);

Title.propTypes = {
    name: PropTypes.string.isRequired,
    manager: PersonPropType.isRequired,
};

export default withContext(StationContext)(Title);
