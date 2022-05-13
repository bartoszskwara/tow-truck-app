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
                          contrastText: '#FFFFFF',
                      },
                      background: {
                          primary: '#FFFFFF',
                          secondary: '#F2F2F2',
                          accent: '#1A1A1A',
                      },
                      info: {
                          main: '#0091CF',
                          contrastText: '#FFFFFF',
                      },
                      border: {
                          default: '#C4C4C4',
                          contrast: '#1A1A1A',
                          contrastInverted: '#FFFFFF',
                      },
                      warning: {
                          main: '#DA6757',
                          contrastText: '#FFFFFF',
                      },
                      accent: {
                          main: '#6AC2B3',
                          light: '#45BD4A',
                          contrastText: '#FFFFFF',
                      },
                      gray: {
                          50: '#E5E5E5',
                          100: '#848484',
                      },
                  }
                : {
                      text: {
                          primary: '#FFFFFF',
                          secondary: '#848484',
                          contrastText: '#1A1A1A',
                      },
                      background: {
                          primary: '#000000',
                          secondary: '#212121',
                          accent: '#FFFFFF',
                      },
                      info: {
                          main: '#0091CF',
                          contrastText: '#FFFFFF',
                      },
                      border: {
                          default: '#C4C4C4',
                          dark: '#FFFFFF',
                      },
                      warning: {
                          main: '#DA6757',
                          contrastText: '#FFFFFF',
                      },
                      accent: {
                          main: '#6AC2B3',
                          light: '#45BD4A',
                          contrastText: '#FFFFFF',
                      },
                      gray: {
                          50: '#E5E5E5',
                          100: '#848484',
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
            MuiPaper: {
                styleOverrides: {
                    elevation0: {
                        border: `1px solid ${theme.palette.border.default}`,
                        borderRadius: theme.spacing(1),
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: theme.spacing(2.5),
                    },
                },
            },
        },
    });
};
