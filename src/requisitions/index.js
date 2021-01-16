import axios from "axios";

const baseUrl = "https://api-deixa-que-eu-faco.herokuapp.com";

export const LoginRequisition = (data, users) => {
  axios
    .post(`${baseUrl}/login`, data)
    .then((res) => {
      const actualData = JSON.parse(res.config.data);
      const actual = users.filter((actual) => {
        return actual.email === actualData.email;
      });
      localStorage.setItem("authToken", res.data.accessToken);
      localStorage.setItem("userData", JSON.stringify(actual[0]));
      console.log("login efetuado com sucesso");
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

  axios
    .post(`${baseUrl}/register`, data)
    .then((res) => console.log("login efetuado com sucesso"));
};
