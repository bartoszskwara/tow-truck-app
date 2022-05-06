import React, { useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import createTheme from './createTheme';
import reducer from './reducer';

const initialState = {
    mode: 'light',
};

const ThemeContext = React.createContext({});

const AppThemeProvider = ({ children }) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };

    const theme = useMemo(
        () => createTheme(prefersDarkMode ? 'dark' : state.mode),
        [state, prefersDarkMode]
    );

    return (
        <ThemeProvider theme={theme}>
            <ThemeContext.Provider value={value}>
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    );
};

AppThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppThemeProvider;

export { ThemeContext };
