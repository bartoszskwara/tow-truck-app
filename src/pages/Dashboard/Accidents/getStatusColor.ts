import { Theme } from '@mui/material/styles';
import { AccidentStatus } from '../../../types';

type GetColors = (theme: Theme) => {
    [key in AccidentStatus]: string;
};

const getColors: GetColors = (theme) => ({
    new: theme.palette.warning.main,
    in_progress: theme.palette.info.main,
    completed: theme.palette.accent.main,
    missed: theme.palette.gray[100],
});

export default (theme: Theme, status: AccidentStatus) =>
    getColors(theme)[status];
