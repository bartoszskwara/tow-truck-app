import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'app/Theme';
import CurrentUserManager from 'app/User/CurrentUserManager';
import SystemNotification from 'components/SystemNotification';
import Layout from 'pages/Layout';
import ErrorBoundary from './app/ErrorBoundary';

const App = () => {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <ThemeProvider>
                    <Layout />
                    <SystemNotification />
                    <CurrentUserManager />
                </ThemeProvider>
            </BrowserRouter>
        </ErrorBoundary>
    );
};

export default App;
