import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Text from 'components/Text';

const Address = ({
    headerLabel,
    headerValue,
    subtitleLabel,
    subtitleValue,
    sx,
}) => (
    <Box sx={[...(Array.isArray(sx) ? sx : [sx])]}>
        <Text
            text={headerLabel.text}
            name={headerLabel.name}
            variables={[headerValue]}
            sx={{
                fontSize: (theme) => theme.spacing(2),
            }}
            variant="bold"
        />
        <br />
        <Text
            text={subtitleLabel.text}
            name={subtitleLabel.name}
            variables={[subtitleValue]}
            variant="light"
            sx={{
                color: (theme) => theme.palette.gray[100],
            }}
        />
    </Box>
);

Address.propTypes = {
    headerLabel: PropTypes.shape({
        text: PropTypes.string,
        name: PropTypes.string,
    }),
    headerValue: PropTypes.number,
    subtitleLabel: PropTypes.shape({
        text: PropTypes.string,
        name: PropTypes.string,
    }),
    subtitleValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.func,
                PropTypes.object,
                PropTypes.bool,
            ])
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};

Address.defaultProps = {
    address: {},
};

export default Address;
