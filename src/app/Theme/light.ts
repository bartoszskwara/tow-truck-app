const lightTheme = {
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
        0: '#f5f5f5',
        50: '#E5E5E5',
        70: '#C4C4C4',
        100: '#848484',
        800: '#303030',
        900: '#262626',
    },
};

export type ThemeType = typeof lightTheme;

export default lightTheme;
