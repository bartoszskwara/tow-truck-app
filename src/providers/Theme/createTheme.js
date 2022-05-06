import { createTheme } from '@mui/material/styles';

const makeThemeBasics = (mode = 'dark') =>
    createTheme({
        spacing: 10,
        palette: {
            mode,
            ...(mode === 'light'
                ? {
                      primary: {
                          main: '#1B283A',
                          contrastText: '#FFFFFF',
                      },
                  }
                : {
                      primary: {
                          main: '#1B283A',
                          contrastText: '#FFFFFF',
                      },
                  }),
        },
    });

const makeThemeTypography = (theme) => {
    return createTheme(theme, {
        typography: {
            header: {
                fontFamily: 'sans-serif',
                fontSize: theme.spacing(2),
            },
            regular: {
                fontFamily: 'sans-serif',
                fontSize: theme.spacing(1.6),
            },
        },
    });
};

export default (mode = 'dark') => {
    const theme = makeThemeTypography(makeThemeBasics(mode));
    return createTheme(theme, {
        components: {},
    });
};
