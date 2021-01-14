import { Route, Switch } from "react-router-dom";
import RegisterForm from "../components/forms/chef-register-form";
import { useHistory } from "react-router-dom";
import Login from "../pages/login";

const Router = () => {
    const history = useHistory(); // Só pra testar a página de cadastro
  return (
        <Switch>
            <Route exact path="/">
                <button onClick={() => history.push("/register")}>Teste</button>
            </Route>
            <Route path="/register">
                <RegisterForm />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
        </Switch>
  );
};

export default Router;
