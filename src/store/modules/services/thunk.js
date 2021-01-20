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

export const getChefServicesThunk = () => (dispatch) => {
  const { id } = actualUser;
  axios.get(`${baseUrl}/services?chefId=${id}`, headers).then((res) => {
    dispatch(getChefServices(res.data));
  });
};

export const getCostumerServicesThunk = () => (dispatch) => {
  const id = actualUser.id;
  axios.get(`${baseUrl}/services/?clientId=${id}`, headers).then((res) => {
    dispatch(getCostumerServices(res.data));
  });
};
