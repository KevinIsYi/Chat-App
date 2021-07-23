import { Redirect, Route, RouteProps } from 'react-router-dom';

interface PublicRouteProps extends RouteProps {
    isAuthenticated: boolean;
};

export const PublicRoute = ({ isAuthenticated, ...rest }: PublicRouteProps) => {

    if (!isAuthenticated) {
        return <Route {...rest} />
    }

    return <Redirect to="/" />
}