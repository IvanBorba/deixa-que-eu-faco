import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import RegisterPage from "../pages/register";
import Login from "../pages/login";
import ViewChef from "../pages/view-chef";
import HomeCustomer from "../pages/home-customer";
import ChefsList from "../pages/chefs-list";
import FilteredChefList from "../pages/filtered-chefs-list";
import ChefHome from "../pages/chef-home";
import { getUsersThunk } from "../store/modules/users/thunk";
import { useDispatch } from "react-redux";
import HomePage from "../pages/home";
import NewService from "../pages/new-service";
import SettingsPage from "../pages/user-settings";
import ActiveServices from "../pages/customer-active-services";
import RestrictedAcess from "../pages/restricted-acess";
import NotFound from "../pages/not-found";

const Router = () => {
  let token = localStorage.getItem("authToken");
  let actualUser = JSON.parse(localStorage.getItem("userData"));
  const dispatch = useDispatch();
  const users = JSON.parse(localStorage.getItem("users"));

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path="/chefs">
        <ChefsList users={users} />
      </Route>
      <Route exact path="/view-chef/:specific_id">
        <ViewChef users={users} />
      </Route>
      <Route exact path="/chefs/:specific_expertise">
        <FilteredChefList users={users} />
      </Route>
      {!token ? (
        <>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/register">
            <RegisterPage defaultView={false}/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/restricted-acess">
            <RestrictedAcess />
          </Route>
          <Route path="/not-found">
            <NotFound />
          </Route>
        </>
      ) : actualUser.isChef ? (
        <>
          <Route exact path="/home-chef">
            <ChefHome />
          </Route>
          <Route exact path="/settings">
            <SettingsPage />
          </Route>
        </>
      ) : (
        <>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/home-customer">
            <HomeCustomer bests={users} />
          </Route>
          <Route exact path="/active-services">
            <ActiveServices />
          </Route>
          <Route exact path="/new-service/:chefId">
            <NewService />
          </Route>
          <Route exact path="/settings">
            <SettingsPage />
          </Route>
          <Route exact path="/chefs">
            <ChefsList users={users} />
          </Route>
          <Route exact path="/chefs/:specific_expertise">
            <FilteredChefList users={users} />
          </Route>
        </>
      )}
    </Switch>
  );
};

export default Router;
