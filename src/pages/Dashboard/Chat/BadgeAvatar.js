import PropTypes from 'prop-types';
import { Avatar, Badge } from '@mui/material';

const getStatusBgColor = (status, theme) => {
    switch (status) {
        case 'online':
            return theme.palette.accent.light;
        case 'offline':
            return theme.palette.gray[100];
        case 'driving':
            return theme.palette.warning.main;
        default:
            return '';
    }
};

const BadgeAvatar = ({ name, src, status, notifications }) => {
    return (
        <Badge
            badgeContent={status === 'driving' ? 'DRIVING' : ' '}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: status === 'driving' ? 'middle' : 'right',
            }}
            sx={{
                '& > .MuiBadge-badge': {
                    background: (theme) => getStatusBgColor(status, theme),
                    bottom: status === 'driving' ? 0 : 7,
                    ...(status === 'driving'
                        ? { borderRadius: (theme) => theme.spacing(0.5) }
                        : {}),
                    right: status === 'driving' ? 0 : 7,
                    minWidth: (theme) => theme.spacing(1.5),
                    height: (theme) => theme.spacing(1.5),
                    fontSize: (theme) => theme.spacing(1),
                },
            }}
        >
            <Badge
                badgeContent={notifications}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                badgeColor={(theme) => theme.palette.info.main}
                sx={{
                    '& > .MuiBadge-badge': {
                        background: (theme) => theme.palette.info.main,
                        top: 7,
                        right: 7,
                        minWidth: (theme) => theme.spacing(1.5),
                        width: (theme) => theme.spacing(1.5),
                        height: (theme) => theme.spacing(1.5),
                        fontSize: (theme) => theme.spacing(1),
                    },
                }}
            >
                <Avatar
                    src={src}
                    alt={name}
                    sx={{
                        width: (theme) => theme.spacing(5.5),
                        height: (theme) => theme.spacing(5.5),
                        border: (theme) =>
                            `2px solid ${theme.palette.border.contrastInverted}`,
                    }}
                />
            </Badge>
        </Badge>
    );
};

BadgeAvatar.propTypes = {
    name: PropTypes.string,
    src: PropTypes.string,
    status: PropTypes.string,
    notifications: PropTypes.number,
};

export default BadgeAvatar;
