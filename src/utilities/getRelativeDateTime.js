export default (timestamp, locales) => {
    const now = new Date().getTime();
    const differenceInSeconds = (now - timestamp) / 1000;
    const differenceInSecondsAbsolute = Math.abs(differenceInSeconds);
    if (differenceInSecondsAbsolute >= 0 && differenceInSecondsAbsolute < 60) {
        return {
            text: 'now',
            name: 'Now',
        };
    } else if (
        differenceInSecondsAbsolute >= 60 &&
        differenceInSecondsAbsolute < 3600
    ) {
        return {
            text: differenceInSeconds > 0 ? '{} minutes ago' : 'in {} minutes',
            name: differenceInSeconds > 0 ? 'MinutesAgo' : 'InMinutes',
            variables: [Math.floor(differenceInSecondsAbsolute / 60)],
        };
    } else if (
        differenceInSecondsAbsolute >= 3600 &&
        differenceInSecondsAbsolute < 86400
    ) {
        return {
            text: differenceInSeconds > 0 ? '{} hours ago' : 'in {} hours',
            name: differenceInSeconds > 0 ? 'HoursAgo' : 'InHours',
            variables: [Math.floor(differenceInSecondsAbsolute / 3600)],
        };
    } else if (
        differenceInSecondsAbsolute >= 86400 &&
        differenceInSecondsAbsolute < 864000
    ) {
        return {
            text: differenceInSeconds > 0 ? '{} days ago' : 'in {} days',
            name: differenceInSeconds > 0 ? 'DaysAgo' : 'InDays',
            variables: [Math.floor(differenceInSecondsAbsolute / 86400)],
        };
    } else {
        return {
            text: new Intl.DateTimeFormat(locales).format(timestamp),
        };
    }
};
