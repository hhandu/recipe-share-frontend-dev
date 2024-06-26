import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const token = localStorage.getItem('token');

    if (!token) {

        return <Navigate to="/login" />;
    }

    return <>{children}</>;
};
export default PrivateRoute;