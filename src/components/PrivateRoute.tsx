
// This component restricts access to certain routes by checking for a token in local storage.
// If no token is found, it redirects the user to the login page its for creating private route.

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