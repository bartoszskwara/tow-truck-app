import PropTypes from 'prop-types';
import { Avatar, Box } from '@mui/material';

const Logo = ({ src, companyName, sx }) => (
    <Box
        sx={[
            {
                display: 'flex',
                alignItems: 'center',
            },
            ...(Array.isArray(sx) ? sx : [sx]),
        ]}
    >
        <Avatar src={src} />
        <Box
            sx={{
                textTransform: 'uppercase',
                marginLeft: 2,
            }}
            component="span"
        >
            {companyName}
        </Box>
    </Box>
);

Logo.propTypes = {
    src: PropTypes.string,
    companyName: PropTypes.string,
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

export default Logo;
