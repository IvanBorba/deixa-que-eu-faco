import { Route, Switch } from "react-router-dom";
import Login from "../pages/login";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Router;
