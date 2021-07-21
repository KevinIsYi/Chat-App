import {
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from "./PublicRoute";
import { ChatPage } from '../pages/ChatPage';
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const AppRouter = () => {
    return (
        <Router>
            <>
                <Switch>
                    <PublicRoute
                        component={LoginPage}
                        isAuthenticated={false}
                        path="/auth/login"
                    />
                    <PublicRoute
                        component={RegisterPage}
                        isAuthenticated={false}
                        path="/auth/register"
                    />
                    <PrivateRoute
                        exact
                        component={ChatPage}
                        path="/"
                        isAuthenticated={true}
                    />

                    <Redirect to="/" />
                </Switch>
            </>

        </Router>
    )
}
