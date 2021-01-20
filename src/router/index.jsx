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
import { useSelector, useDispatch } from "react-redux";
import HomePage from "../pages/home";
import NewService from "../pages/new-service";
import Header from "../components/header";

const Router = () => {
  let token = localStorage.getItem("authToken");
  let actualUser = JSON.parse(localStorage.getItem("userData"));
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path="/">
        {!token ? (
          <HomePage />
        ) : actualUser.isChef ? (
          <ChefHome />
        ) : (
          <HomeCustomer bests={users} />
        )}
      </Route>
      <Route exact path="/chefs">
        <ChefsList users={users} />
      </Route>
      <Route exact path="/view-chef/:specific_id">
        <ViewChef users={users} />
      </Route>
      {!token ? (
        <>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </>
      ) : actualUser.isChef ? (
        <>
          <Route exact path="/settings">
            {/* <ChefSetting/> */}
            <Header />
          </Route>
        </>
      ) : (
        <>
          <Route exact path="/new-service/:chefId">
            <NewService />
          </Route>
          <Route exact path="/settings">
            <Header />
            {/* <CostumerSetting/> */}
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
