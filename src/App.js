import { BrowserRouter } from 'react-router-dom';
import Layout from 'pages/Layout';
import ThemeProvider from 'providers/Theme';
import AuthProvider from "./providers/Auth";

const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <ThemeProvider>
                    <Layout />
                </ThemeProvider>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;
