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
            {/* <Home/> */}
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/chefs">
            <ChefsList users={users} />
          </Route>
          <Route path="/view-chef/:specific_id">
            <ViewChef users={users} />
          </Route>
        </>
      ) : (
        <></>
      )}
    </Switch>
  );
};

export default Router;
