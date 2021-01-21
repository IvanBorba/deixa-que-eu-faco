import axios from "axios";
import { getUsers } from "./actions";

export const getUsersThunk = () => (dispatch) => {
  axios.get("https://api-deixa-que-eu-faco.herokuapp.com/users").then((res) => {
    dispatch(getUsers(res.data));
    let array = [...res.data];
    localStorage.setItem("users", JSON.stringify(array));
  });
};
