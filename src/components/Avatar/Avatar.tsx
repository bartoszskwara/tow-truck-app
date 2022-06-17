import PropTypes from 'prop-types';
import { Avatar as MuiAvatar, Badge, SxProps, Theme } from '@mui/material';
import { OnlineStatus } from '../../types';

const getStatusBgColor = ({
    status,
    theme,
}: {
    status?: OnlineStatus;
    theme: Theme;
}) => {
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

interface Props {
    name?: string;
    src?: string;
    status?: OnlineStatus;
    notifications?: number;
    sxProps?: {
        status?: SxProps<Theme>;
        notifications?: SxProps<Theme>;
        avatar?: SxProps<Theme>;
    };
}

const Avatar = ({ name, src, status, notifications, sxProps }: Props) => (
    <Badge
        badgeContent={status === 'driving' ? 'DRIVING' : ' '}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        sx={[
            {
                '& > .MuiBadge-badge': {
                    background: (theme) => getStatusBgColor({ status, theme }),
                    bottom: status === 'driving' ? 0 : 7,
                    ...(status === 'driving'
                        ? {
                              borderRadius: (theme) => theme.spacing(0.5),
                              transform: 'translate(0, 0)',
                          }
                        : {}),
                    right: status === 'driving' ? 0 : 7,
                    minWidth: (theme) => theme.spacing(1.5),
                    height: (theme) => theme.spacing(1.5),
                    fontSize: (theme) => theme.spacing(1),
                },
            },
            ...(sxProps
                ? Array.isArray(sxProps.status)
                    ? sxProps.status
                    : [sxProps.status]
                : []),
        ]}
    >
        <Badge
            badgeContent={notifications}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            sx={[
                {
                    '& > .MuiBadge-badge': {
                        background: (theme) => theme.palette.info.main,
                        top: 7,
                        right: 7,
                        minWidth: (theme) => theme.spacing(1.5),
                        width: (theme) => theme.spacing(1.5),
                        height: (theme) => theme.spacing(1.5),
                        fontSize: (theme) => theme.spacing(1),
                    },
                },
                ...(sxProps
                    ? Array.isArray(sxProps.notifications)
                        ? sxProps.notifications
                        : [sxProps.notifications]
                    : []),
            ]}
        >
            <MuiAvatar
                src={src}
                alt={name}
                sx={[
                    {
                        width: (theme) => theme.spacing(5.5),
                        height: (theme) => theme.spacing(5.5),
                        border: (theme) =>
                            `2px solid ${theme.palette.border.contrastInverted}`,
                        boxSizing: 'border-box',
                    },
                    ...(sxProps
                        ? Array.isArray(sxProps.avatar)
                            ? sxProps.avatar
                            : [sxProps.avatar]
                        : []),
                ]}
            />
        </Badge>
    </Badge>
);

Avatar.propTypes = {
    name: PropTypes.string,
    src: PropTypes.string,
    status: PropTypes.string,
    notifications: PropTypes.number,
};

export default Avatar;
