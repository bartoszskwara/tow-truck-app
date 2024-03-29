import { Navigate, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import ChatContainer from 'components/Chat';
import Header from 'components/Header';
import useAuth from 'hooks/useAuth';
import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import Settings from 'pages/Settings';
import Stations from 'pages/Stations';
import ProtectedRoute from './ProtectedRoute';

const Layout = () => {
    const { isAuthenticated } = useAuth();

    const IndexElement = () =>
        !isAuthenticated ? (
            <Login />
        ) : (
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        );
    return (
        <Box
            sx={{
                background: (theme) => theme.palette.background.secondary,
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {isAuthenticated && <Header />}
            <Box
                sx={{
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: (theme) => `
                    ${theme.spacing(2)}
                    ${theme.spacing(4)}
                    ${theme.spacing(2)}
                    ${theme.spacing(6)}
                `,
                }}
            >
                <Routes>
                    <Route index element={<IndexElement />} />
                    <Route
                        path="/stations"
                        element={
                            <ProtectedRoute>
                                <Stations />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="*" element={<Navigate replace to="" />} />
                </Routes>
                {isAuthenticated && (
                    <Box sx={{ marginLeft: (theme) => theme.spacing(2.5) }}>
                        <ChatContainer />
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default Layout;
