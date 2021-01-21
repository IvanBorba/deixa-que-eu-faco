import axios from "axios";

const baseUrl = "https://api-deixa-que-eu-faco.herokuapp.com";
const token = localStorage.getItem("authToken");
const headers = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const LoginRequisition = (data, history) => {
  axios
    .post(`${baseUrl}/login`, data)
    .then(async (res) => {
      localStorage.setItem("authToken", res.data.accessToken);
      let actual = await axios.get(`${baseUrl}/users?email=${data.email}`);
      localStorage.setItem("userData", JSON.stringify(actual.data[0]));
      actual.data[0].isChef
        ? history.push("/home-chef")
        : history.push("/home-customer");
      window.location.reload();
    })
    .catch(() => console.log("login ou senha incorretos"));
};

export const RegisterPost = (data, chefRegister, options) => {
  const date = document.getElementById("birth_date");
  if (chefRegister) {
    data.expertise = options.expertise;
    data.experience = options.experience;
  }
  data.birth_date = date.value;
  data.isChef = chefRegister;
  console.log(data);
  axios.post(`${baseUrl}/register`, data).then((res) => console.log(res));
};

export const registerService = (data, setSuccess) => {
  axios
    .post(`${baseUrl}/services`, data, headers)
    .then((res) => setSuccess(true))
    .catch((err) => console.log(err, "Erro no cadastro do produto"));
};

export const updateService = (data, serviceId) => {
  axios
    .patch(`${baseUrl}/services/${serviceId}`, data, headers)
    .then((res) => {
      window.location.reload();
    })
    .catch((err) => console.log(err, "Erro na atualização do produto"));
};

export const updateServiceRate = (data, serviceId, userData, chefId) => {
  const updateProfile = (chefData, id) => {
    axios
      .patch(`${baseUrl}/users/${id}`, chefData, headers)
      .then((res) => console.log(res))
      .catch((err) => console.log(err, "Erro na atualização do perfil"));
  };
  axios
    .patch(`${baseUrl}/services/${serviceId}`, data, headers)
    .then((res) => {
      updateProfile(userData, chefId);
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
