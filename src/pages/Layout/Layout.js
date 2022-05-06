import { Routes, Route, Navigate } from 'react-router-dom';
import Header from 'components/Header';
import useAuth from 'hooks/useAuth';
import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
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
        <>
            {isAuthenticated && <Header />}
            <Routes>
                <Route index element={<IndexElement />} />
                <Route path="*" element={<Navigate replace to="" />} />
            </Routes>
        </>
    );
};

export default Layout;
