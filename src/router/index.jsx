import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import RegisterPage from "../pages/register";
import Login from "../pages/login";
import ViewChef from "../pages/view-chef";
import ChefsList from "../pages/chefs-list";
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
      {!token ? (
        <>
          <Route exact path="/">
            <HomePage />
          </Route>
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
            <Header />
            <ChefHome />
          </Route>
          <Route exact path="/settings">
            {/* <ChefSetting/> */}
          </Route>
        </>
      ) : (
        <>
          <Route exact path="/costumer-home">
            <Header />
            {/* <CostumerHome /> */}
          </Route>
          <Route exact path="/settings">
            {/* <CostumerSetting/> */}
          </Route>
        </>
      )}
    </Switch>
  );
};

export default Router;
