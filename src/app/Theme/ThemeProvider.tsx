import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useAppSelector } from 'app/store';
import createTheme from './createTheme';

const AppThemeProvider = ({ children }: { children?: React.ReactNode }) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const themeMode = useAppSelector(({ theme }) => theme.mode);

    const theme = useMemo(
        () => createTheme(prefersDarkMode ? 'dark' : themeMode),
        [themeMode, prefersDarkMode]
    );

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

AppThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppThemeProvider;
