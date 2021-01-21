import axios from "axios";

const api = axios.create({
  baseURL: "https://api-deixa-que-eu-faco.herokuapp.com",
});

const token = localStorage.getItem("authToken");
const headers = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const LoginRequisition = (data, history, setErro) => {
  api
    .post(`/login`, data)
    .then(async (res) => {
      localStorage.setItem("authToken", res.data.accessToken);
      let actual = await api.get(`/users?email=${data.email}`);
      localStorage.setItem("userData", JSON.stringify(actual.data[0]));
      actual.data[0].isChef
        ? history.push("/home-chef")
        : history.push("/home-customer");
      window.location.reload();
    })
    .catch(() => setErro("login ou senha incorretos"));
};

export const RegisterPost = (data, chefRegister, options, history) => {
  const date = document.getElementById("birth_date");
  if (chefRegister) {
    data.expertise = options.expertise;
    data.experience = options.experience;
  }
  data.birth_date = date.value;
  data.isChef = chefRegister;
  api.post(`/register`, data).then((res) => history.push("/login"));
};

export const registerService = (data, setSuccess) => {
  api
    .post(`/services`, data, headers)
    .then((res) => setSuccess(true))
    .catch((err) => console.error(err, "Erro no cadastro do produto"));
};

export const updateService = (data, serviceId) => {
  api
    .patch(`/services/${serviceId}`, data, headers)
    .then((res) => {
      window.location.reload();
    })
    .catch((err) => console.error(err, "Erro na atualização do produto"));
};

export const updateProfile = (chefData, id) => {
  api
    .patch(`/users/${id}`, chefData, headers)
    .then((res) => {
      window.location.reload();
    })
    .catch((err) => console.error(err, "Erro na atualização do perfil"));
};

export const updateServiceRate = (data, serviceId, userData, chefId) => {
  api
    .patch(`/services/${serviceId}`, data, headers)
    .then((res) => {
      updateProfile(userData, chefId);
    })
    .catch((err) => console.error(err, "Erro na atualização do produto"));
};

export const deleteService = (serviceId) => {
  api
    .delete(`/services/${serviceId}`, headers)
    .then((res) => window.location.reload())
    .catch((err) => console.error(err, "Erro na atualização do produto"));
};
