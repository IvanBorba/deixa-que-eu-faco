import axios from "axios";

const baseUrl = "https://api-deixa-que-eu-faco.herokuapp.com";
const token = localStorage.getItem("authToken");
const headers = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const updateProfile = (data, id) => {
  axios
    .patch(`${baseUrl}/users/${id}`, data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err, "Erro na atualização do perfil"));
};

export const LoginRequisition = (data, users, history) => {
  axios
    .post(`${baseUrl}/login`, data)
    .then(async (res) => {
      let actual = await axios.get(`${baseUrl}/users?email=${data.email}`);
      localStorage.setItem("authToken", res.data.accessToken);
      localStorage.setItem("userData", JSON.stringify(actual.data[0]));
      console.log(actual.data);
      let historyUser = JSON.parse(localStorage.getItem("userData"));
      historyUser.isChef
        ? history.push("/home-chef")
        : history.push("/home-customer");
      window.location.reload();
    })
    .catch(() => console.log("login ou senha incorretos"));
};

export const RegisterPost = (data, chefRegister, options) => {
  if (chefRegister) {
    data.expertise = options.expertise;
    data.experience = options.experience;
    data.isChef = chefRegister;
  } else {
    data.isChef = chefRegister;
  }
  console.log(data);
  axios.post(`${baseUrl}/register`, data).then((res) => console.log(res));
};

export const registerService = (data, setSuccess) => {
  axios
    .post(`${baseUrl}/services`, data, headers)
    .then((res) => setSuccess(true))
    .catch((err) => console.log(err, "Erro no cadastro do produto"));
};

export const updateService = (data, serviceId, userData, chefId) => {
  axios
    .patch(`${baseUrl}/services/${serviceId}`, data, headers)
    .then((res) => {
      console.log(res);
      // updateProfile(userData, chefId);
      window.location.reload();
    })
    .catch((err) => console.log(err, "Erro na atualização do produto"));
};

export const deleteService = (serviceId) => {
  axios
    .delete(`${baseUrl}/services/${serviceId}`, headers)
    .then((res) => window.location.reload())
    .catch((err) => console.log(err, "Erro na atualização do produto"));
};
