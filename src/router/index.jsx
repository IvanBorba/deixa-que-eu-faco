import { Route, Switch } from "react-router-dom";
import Login from "../pages/login";
import ChefList from "../pages/chefs-list";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/login">
        <ChefList />
      </Route>
      <Route exact path="/view-chef/:id"></Route>
    </Switch>
  );
};

export default Router;
