import { PaletteMode } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Theme } from '@mui/material/styles/createTheme';
import darkTheme from './dark';
import lightTheme, { ThemeType } from './light';

declare module '@mui/material/styles' {
    interface PaletteOptions extends Partial<ThemeType> {}
    interface Palette extends ThemeType {}
    interface TypeBackground {
        primary: string;
        secondary: string;
        accent: string;
    }
    interface TypeText {
        contrastText: string;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        regular: true;
        light: true;
        bold: true;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        accent: true;
    }
}

const makeThemeBasics = (mode: PaletteMode = 'dark') =>
    createTheme({
        spacing: 10,
        palette: {
            mode,
            ...(mode === 'light' ? lightTheme : darkTheme),
        },
    });

const makeThemeTypography = (theme: Theme) => {
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

export default (mode: PaletteMode = 'dark') => {
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
            MuiButton: {
                styleOverrides: {
                    root: {
                        boxShadow: 'none',
                        '&:hover': {
                            boxShadow: 'none',
                        },
                    },
                    textPrimary: {
                        color: theme.palette.text.primary,
                        padding: '6px 16px',
                        '&:hover': {
                            backgroundColor: theme.palette.gray[0],
                        },
                    },
                },
            },
        },
    });
};
