import React from 'react';
import PropTypes from 'prop-types';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SxPropType } from 'propTypes';
import { Sx } from 'types';
import Badge from './Badge';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    marginLeft: theme.spacing(2),
    padding: theme.spacing(1),
}));

interface Props {
    newMessages: number;
    newNotifications: number;
    sx: Sx;
}

const ActionButtons = ({
    newMessages,
    newNotifications,
    sx,
}: Partial<Props>) => {
    return (
        <Box
            sx={[
                {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            <StyledIconButton aria-label="messages">
                <Badge badgeContent={newMessages}>
                    <MessageIcon
                        sx={{ color: (theme) => theme.palette.text.primary }}
                    />
                </Badge>
            </StyledIconButton>
            <StyledIconButton aria-label="notifications">
                <Badge badgeContent={newNotifications}>
                    <NotificationsIcon
                        sx={{ color: (theme) => theme.palette.text.primary }}
                    />
                </Badge>
            </StyledIconButton>
            <StyledIconButton aria-label="account">
                <AccountCircleIcon
                    sx={{ color: (theme) => theme.palette.text.primary }}
                />
            </StyledIconButton>
        </Box>
    );
};

ActionButtons.propTypes = {
    newMessages: PropTypes.number,
    newNotifications: PropTypes.number,
    sx: SxPropType,
};

export default ActionButtons;
