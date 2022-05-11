import { createTheme } from '@mui/material/styles';

const makeThemeBasics = (mode = 'dark') =>
    createTheme({
        spacing: 10,
        palette: {
            mode,
            ...(mode === 'light'
                ? {
                      text: {
                          primary: '#1A1A1A',
                          secondary: '#848484',
                      },
                      background: {
                          primary: '#FFFFFF',
                          secondary: '#F2F2F2',
                      },
                  }
                : {
                      text: {
                          primary: '#FFFFFF',
                          secondary: '#848484',
                      },
                      background: {
                          primary: '#000000',
                          secondary: '#212121',
                      },
                  }),
        },
    });

const makeThemeTypography = (theme) => {
    return createTheme(theme, {
        typography: {
            light: {
                fontFamily: 'OpenSansRegular',
                fontSize: theme.spacing(1.4),
            },
            regular: {
                fontFamily: 'OpenSansSemiBold',
                fontSize: theme.spacing(1.4),
            },
            bold: {
                fontFamily: 'OpenSansBold',
                fontSize: theme.spacing(1.4),
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
