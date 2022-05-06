import { BrowserRouter } from 'react-router-dom';
import Layout from 'pages/Layout';
import ThemeProvider from 'providers/Theme';

const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <Layout />
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
