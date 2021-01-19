import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import RegisterPage from "../pages/register";
import Login from "../pages/login";
import ViewChef from "../pages/view-chef";
import ChefsList from "../pages/chefs-list";
import FilteredChefList from "../pages/filtered-chefs-list";
import ChefHome from "../pages/chef-home";
import { getUsersThunk } from "../store/modules/users/thunk";
import { useSelector, useDispatch } from "react-redux";
import HomePage from "../pages/home";
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
        <HomePage />
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
          <Route exact path="/chef-home">
            <ChefHome />
          </Route>
          <Route exact path="/settings">
            {/* <ChefSetting/> */}
          </Route>
          <Route exact path="/chefs">
            <ChefsList users={users} />
          </Route>
          <Route exact path="/chefs/:specific_expertise">
            <FilteredChefList users={users} />
          </Route>
        </>
      ) : (
        <>
          <Route exact path="/new-service/:chefId">
            {/* <NewService /> */}
          </Route>
          <Route exact path="/costumer-home">
            <Header />
            {/* <CostumerHome /> */}
          </Route>
          <Route exact path="/settings">
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
