import { useContext } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import { AuthContext } from '../context/auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from "./PublicRoute";
import { ChatPage } from '../pages/ChatPage';
import { LoginPage } from "../pages/LoginPage";

export const AppRouter = () => {

    const { authState: { isLoggedIn } } = useContext(AuthContext);
    
    return (
        <Router>
            <>
                <Switch>
                    <PublicRoute
                        exact
                        path="/auth"
                        isAuthenticated={isLoggedIn}
                        component={LoginPage}
                    />
                    <PrivateRoute
                        exact
                        path="/"
                        isAuthenticated={isLoggedIn}
                        component={ChatPage}
                    />

                    <Redirect to="/" />
                </Switch>
            </>

        </Router>
    )
}
