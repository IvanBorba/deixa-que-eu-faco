import axios from "axios";
import { getChefServices, getCostumerServices } from "./actions";

const token = localStorage.getItem("authToken");
const baseUrl = "https://api-deixa-que-eu-faco.herokuapp.com";
const actualUser = JSON.parse(localStorage.getItem("userData"));
const headers = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const getChefServicesThunk = (page, option) => (dispatch) => {
  const id = actualUser.id;
  axios
    .get(
      `${baseUrl}/services?_page=${page}&_limit=2&chefId=${id}&status=${option}`,
      headers
    )
    .then((res) => {
      console.log(res);
      dispatch(getChefServices(res.data));
    });
};

export const getCostumerServicesThunk = () => (dispatch) => {
  const id = actualUser.id;
  axios.get(`${baseUrl}/services/?clientId=${id}`, headers).then((res) => {
    console.log(res);
    dispatch(getCostumerServices(res.data));
  });
};
