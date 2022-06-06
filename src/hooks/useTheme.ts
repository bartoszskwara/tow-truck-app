import { PaletteMode } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/store';
import { toggleTheme } from 'app/Theme/themeSlice';

interface ThemeData {
    theme: PaletteMode;
    toggleTheme: () => void;
}

const useTheme = (): ThemeData => {
    const dispatch = useAppDispatch();
    const themeMode = useAppSelector(({ theme }) => theme.mode);

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    return {
        theme: themeMode,
        toggleTheme: handleToggleTheme,
    };
};

export default useTheme;
