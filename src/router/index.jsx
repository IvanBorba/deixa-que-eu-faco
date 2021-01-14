import { Route, Switch } from "react-router-dom";
import Login from "../pages/login";
import ChefProfile from "../pages/chef-profile";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/chef-profile">
        <ChefProfile />
      </Route>
    </Switch>
  );
};

export default Router;
