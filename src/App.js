import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'app/Theme';
import CurrentUserManager from 'app/User/CurrentUserManager';
import SystemNotification from 'components/SystemNotification';
import Layout from 'pages/Layout';

const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <Layout />
                <SystemNotification />
                <CurrentUserManager />
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
