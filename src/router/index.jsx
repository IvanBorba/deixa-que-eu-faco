import { Route, Switch } from "react-router-dom";
import RegisterForm from "../components/forms/chef-register-form";
import { useHistory } from "react-router-dom";
import Login from "../pages/login";
import ViewChef from "../pages/view-chef";
import ChefsList from "../pages/chefs-list";

const Router = () => {
  const history = useHistory(); // Só pra testar a página de cadastro
  return (
    <Switch>
      <Route exact path="/">
        <ChefsList />
        <button onClick={() => history.push("/register")}>Teste</button>
      </Route>
      <Route path="/register">
        <RegisterForm />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/view-chef/:id">
        <ViewChef />
      </Route>
    </Switch>
  );
};

export default Router;
