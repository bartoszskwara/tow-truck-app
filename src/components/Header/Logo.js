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
        <Avatar
            src={src}
            sx={{
                width: (theme) => theme.spacing(3.2),
                height: (theme) => theme.spacing(3.2),
                padding: (theme) => theme.spacing(0.5),
                border: (theme) =>
                    `${theme.spacing(0.1)} solid ${theme.palette.border.dark}`,
            }}
        />
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
