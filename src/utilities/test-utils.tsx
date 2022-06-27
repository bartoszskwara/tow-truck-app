import React, { FC, ReactElement } from 'react';
import { RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { store } from 'app/store';
import createTheme from 'app/Theme/createTheme';

const theme = createTheme();

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
);

const rtl = require('@testing-library/react');

export const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
) => rtl.render(ui, { wrapper: AllTheProviders, ...options });
