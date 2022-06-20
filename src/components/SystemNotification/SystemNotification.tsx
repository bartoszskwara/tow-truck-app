import _ from 'lodash';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useAppDispatch, useAppSelector } from 'app/store';
import Text from '../Text';
import { closeNotification } from './systemNotificationSlice';

const SystemNotification = () => {
    const dispatch = useAppDispatch();
    const { notifications } = useAppSelector(
        ({ systemNotification }) => systemNotification
    );
    const handleClose = () => {
        dispatch(closeNotification());
    };
    const currentNotification = _.isEmpty(notifications)
        ? null
        : notifications[notifications.length - 1];

    return (
        <>
            {currentNotification && (
                <Snackbar
                    open={!!currentNotification}
                    autoHideDuration={5000}
                    onClose={handleClose}
                >
                    <Alert
                        onClose={handleClose}
                        severity={currentNotification.severity}
                        elevation={6}
                    >
                        {currentNotification.textProps && (
                            <Text {...currentNotification.textProps} />
                        )}
                    </Alert>
                </Snackbar>
            )}
        </>
    );
};

export default SystemNotification;
