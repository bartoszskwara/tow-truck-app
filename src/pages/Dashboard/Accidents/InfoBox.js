import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Text from 'components/Text';

const InfoBox = ({
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

InfoBox.propTypes = {
    headerLabel: PropTypes.shape({
        text: PropTypes.string,
        name: PropTypes.string,
    }),
    headerValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    subtitleLabel: PropTypes.shape({
        text: PropTypes.string,
        name: PropTypes.string,
    }),
    subtitleValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.node,
    ]),
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

InfoBox.defaultProps = {
    address: {},
};

export default InfoBox;
