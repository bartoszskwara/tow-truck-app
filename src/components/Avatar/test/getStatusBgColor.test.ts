import createTheme from 'app/Theme/createTheme';
import lightTheme from 'app/Theme/light';
import getStatusBgColor from '../getStatusBgColor';

const theme = createTheme('light');

test('returns proper status colors', () => {
    expect(getStatusBgColor({ theme, status: 'online' })).toBe(
        lightTheme.accent.light
    );
    expect(getStatusBgColor({ theme, status: 'offline' })).toBe(
        lightTheme.gray[100]
    );
    expect(getStatusBgColor({ theme, status: 'driving' })).toBe(
        lightTheme.warning.main
    );
    expect(getStatusBgColor({ theme })).toBe('');
});
