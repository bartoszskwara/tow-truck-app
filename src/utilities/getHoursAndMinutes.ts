interface HoursMinutes {
    hours: number;
    minutes: number;
}

const getHoursAndMinutes = (time: number): HoursMinutes => {
    if (time === 0) {
        return {
            hours: 0,
            minutes: 0,
        };
    }
    const minutes = Math.floor(time / 60000);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes - hours * 60;
    return {
        hours,
        minutes: remainingMinutes,
    };
};

export default getHoursAndMinutes;
