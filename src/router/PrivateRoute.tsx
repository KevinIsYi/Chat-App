import { Redirect, Route, RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
    isAuthenticated: boolean;
};

export const PrivateRoute = ({ isAuthenticated, ...rest }: PrivateRouteProps) => {

    if (isAuthenticated) {
        return (
            <Route {...rest} />
        )
    }

    return <Redirect to="/auth/login" />
}
