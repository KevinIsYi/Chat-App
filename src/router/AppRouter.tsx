import {
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from "./PublicRoute";
import { ChatPage } from '../pages/ChatPage';
import { LoginPage } from "../pages/LoginPage";

export const AppRouter = () => {
    return (
        <Router>
            <>
                <Switch>
                    <PublicRoute
                        exact
                        path="/auth"
                        isAuthenticated={false}
                        component={LoginPage}
                    />
                    <PrivateRoute
                        exact
                        path="/"
                        isAuthenticated={true}
                        component={ChatPage}
                    />

                    <Redirect to="/" />
                </Switch>
            </>

        </Router>
    )
}
