import PropTypes from 'prop-types';
import { Avatar, Box, SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';

interface Props {
    src: string;
    companyName: string;
    sx: SxProps<Theme>;
}

const Logo = ({ src, companyName, sx }: Partial<Props>) => (
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
                    `${theme.spacing(0.1)} solid ${
                        theme.palette.border.contrast
                    }`,
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
