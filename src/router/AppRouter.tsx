import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ChatPage } from '../pages/ChatPage';

export const AppRouter = () => {
    return (
        <Router>
            <>
                <Switch>
                    <Route exact path="/" component={ChatPage} />
                    <Route exact path="/auth/login" component={LoginPage} />
                    <Route exact path="/auth/register" component={RegisterPage} />

                    <Redirect to="/" />
                </Switch>
            </>

        </Router>
    )
}
