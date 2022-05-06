import { useContext } from 'react';
import { ThemeContext, actions } from 'providers/Theme';

const useTheme = () => {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    const handleToggleTheme = () => {
        context.dispatch({ type: actions.TOGGLE_THEME });
    };

    return {
        onToggleTheme: handleToggleTheme,
    };
};

export default useTheme;
