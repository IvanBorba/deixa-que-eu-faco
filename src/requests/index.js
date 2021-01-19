import axios from "axios";

const baseUrl = "https://api-deixa-que-eu-faco.herokuapp.com";
const token = localStorage.getItem("authToken");
const headers = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const LoginRequisition = (data, users, history) => {
  axios
    .post(`${baseUrl}/login`, data)
    .then((res) => {
      const actualData = JSON.parse(res.config.data);
      const actual = users.filter((actual) => {
        return actual.email === actualData.email;
      });
      localStorage.setItem("authToken", res.data.accessToken);
      localStorage.setItem("userData", JSON.stringify(actual[0]));
      let historyUser = JSON.parse(localStorage.getItem("userData"));
      historyUser.isChef
        ? history.push("/chef-home")
        : history.push("/costumer-home");
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
  console.log(data)
  axios
    .post(`${baseUrl}/register`, data)
    .then((res) => console.log(res));
};

export const registerService = (data) => {
  axios
    .post(`${baseUrl}/services`, data, headers)
    .then((res) => console.log(res, "Serviço cadastrado com sucesso"))
    .catch((err) => console.log(err, "Erro no cadastro do produto"));
};

export const updateService = (data, serviceId) => {
  axios
    .patch(`${baseUrl}/services/${serviceId}`, data, headers)
    .then((res) => console.log(res, "Serviço atualizado com sucesso"))
    .catch((err) => console.log(err, "Erro na atualização do produto"));
};

export const deleteService = (serviceId) => {
  axios
    .delete(`${baseUrl}/services/${serviceId}`, headers)
    .then((res) => console.log(res, "Serviço atualizado com sucesso"))
    .catch((err) => console.log(err, "Erro na atualização do produto"));
};
