const getColors = (theme) => ({
    new: theme.palette.warning.main,
    in_progress: theme.palette.info.main,
    completed: theme.palette.accent.main,
    missed: theme.palette.gray[100],
});

export default (theme, status) => getColors(theme)[status];
