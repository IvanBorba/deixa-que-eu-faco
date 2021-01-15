import axios from "axios";
const baseUrl = "https://api-deixa-que-eu-faco.herokuapp.com"

export const LoginRequisition = (data) => {
    axios
        .post(`${baseUrl}/login`, data)
        .then((res) => {
            console.log("Token: ", res.data.accessToken);
            window.localStorage.setItem("authToken", res.data.accessToken);
        })
        .catch(() => console.log("login ou senha incorretos"));
}

export const RegisterPost = (data, chefRegister, options) => {
    console.log(data)

    if (chefRegister) {
        data.expertise = options.expertise
        data.experience = options.experience
        data.isChef = chefRegister
    } else {
        data.isChef = chefRegister
    }

    axios.post(`${baseUrl}/register`, data).then();
}