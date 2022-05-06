import { Routes, Route, Navigate } from 'react-router-dom';
import Header from 'components/Header';
import Dashboard from 'pages/Dashboard';

const Layout = () => (
    <>
        <Header />
        <Routes>
            <Route index element={<Dashboard />} />
            <Route path="*" element={<Navigate replace to="" />} />
        </Routes>
    </>
);

export default Layout;
