import PropTypes from 'prop-types';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, Box, IconButton } from '@mui/material';

const ActionButtons = ({ newMessages, newNotifications, sx }) => {
    return (
        <Box sx={sx}>
            <IconButton aria-label="messages">
                <Badge badgeContent={newMessages} color="primary">
                    <MessageIcon />
                </Badge>
            </IconButton>
            <IconButton aria-label="notifications">
                <Badge badgeContent={newNotifications} color="primary">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <IconButton aria-label="account">
                <AccountCircleIcon />
            </IconButton>
        </Box>
    );
};

ActionButtons.propTypes = {
    newMessages: PropTypes.number,
    newNotifications: PropTypes.number,
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

export default ActionButtons;
