import PropTypes from 'prop-types';
import { Avatar, Box } from '@mui/material';
import { SxPropType } from 'propTypes';
import { Sx } from 'types';

interface Props {
    src: string;
    companyName: string;
    sx: Sx;
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
    sx: SxPropType,
};

export default Logo;
