import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import RegisterPage from "../pages/register";
import Login from "../pages/login";
import ViewChef from "../pages/view-chef";
import ChefsList from "../pages/chefs-list";
import { getUsersThunk } from "../store/modules/users/thunk";
import { useSelector, useDispatch } from "react-redux";

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
      <Route path="/chefs">
        <ChefsList users={users} />
      </Route>
      <Route path="/view-chef/:specific_id">
        <ViewChef users={users} />
      </Route>
      {!token ? (
        <>
          <Route exact path="/">
            {/* <Home/> */}
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
            {/* <ChefHome/> */}
          </Route>
          <Route exact path="/chef-settings">
            {/* <ChefSetting/> */}
          </Route>
        </>
      ) : (
        <>
          <Route exact path="/costumer-home">
            {/* <CostumerHome /> */}
          </Route>
          <Route exact path="/costumer-settings">
            {/* <CostumerSetting/> */}
          </Route>
        </>
      )}
    </Switch>
  );
};

export default Router;
