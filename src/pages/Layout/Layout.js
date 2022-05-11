import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
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
            }}
        >
            {isAuthenticated && <Header />}
            <Routes>
                <Route index element={<IndexElement />} />
                <Route path="/stations" element={<Stations />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<Navigate replace to="" />} />
            </Routes>
        </Box>
    );
};

export default Layout;
