import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useAppDispatch, useAppSelector } from 'app/store';
import Text from '../Text';
import { closeNotification } from './systemNotificationSlice';

const SystemNotification = () => {
    const dispatch = useAppDispatch();
    const { open, textProps, severity } = useAppSelector(
        ({ systemNotification }) => systemNotification
    );
    const handleClose = () => {
        dispatch(closeNotification());
    };

    return (
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity} elevation={6}>
                {textProps && <Text {...textProps} />}
            </Alert>
        </Snackbar>
    );
};

export default SystemNotification;
