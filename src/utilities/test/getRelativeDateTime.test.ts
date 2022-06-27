import getRelativeDateTime from '../getRelativeDateTime';

beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(1656014497000));
});

afterAll(() => {
    jest.useRealTimers();
});

test('returns correct relative time', () => {
    expect(getRelativeDateTime(1656010897000, 'en')).toStrictEqual({
        text: '{} hours ago',
        name: 'HoursAgo',
        variables: [1],
    });
    expect(getRelativeDateTime(1656013837000, 'en')).toStrictEqual({
        text: '{} minutes ago',
        name: 'MinutesAgo',
        variables: [11],
    });
    expect(getRelativeDateTime(1656028237000, 'en')).toStrictEqual({
        text: 'in {} hours',
        name: 'InHours',
        variables: [3],
    });
});
