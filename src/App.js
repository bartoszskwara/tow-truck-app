import { BrowserRouter } from 'react-router-dom';
import Layout from 'pages/Layout';
import ThemeProvider from 'providers/Theme';
import AuthProvider from './providers/Auth';
import UserProvider from './providers/User';

const App = () => {
    return (
        <AuthProvider>
            <UserProvider>
                <BrowserRouter>
                    <ThemeProvider>
                        <Layout />
                    </ThemeProvider>
                </BrowserRouter>
            </UserProvider>
        </AuthProvider>
    );
};

export default App;
