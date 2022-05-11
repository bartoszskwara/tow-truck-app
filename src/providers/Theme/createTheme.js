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
                      info: {
                          main: '#0091CF',
                          contrastText: '#FFFFFF',
                      },
                      border: {
                          default: '#C4C4C4',
                          dark: '#1A1A1A',
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
                      info: {
                          main: '#0091CF',
                          contrastText: '#FFFFFF',
                      },
                      border: {
                          default: '#C4C4C4',
                          dark: '#FFFFFF',
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
        components: {
            MuiBadge: {
                styleOverrides: {
                    colorInfo: {
                        width: theme.spacing(1.5),
                        minWidth: theme.spacing(1.5),
                        height: theme.spacing(1.5),
                        fontSize: theme.spacing(1.1),
                        bottom: theme.spacing(0.3),
                        right: theme.spacing(0.3),
                    },
                },
            },
        },
    });
};
