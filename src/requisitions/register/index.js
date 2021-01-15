import axios from "axios";
import { useHistory } from "react-router-dom";

export const RegisterPost = (data, chefRegister, options) => {
    const history = useHistory();
    if (chefRegister) {
        data.expertise = options.expertise
        data.experience = options.experience
        data.isChef = chefRegister
    } else {
        data.isChef = chefRegister
    }
    console.log(data)
    axios.post("https://api-deixa-que-eu-faco.herokuapp.com/register", data)
        .then(() => {
            history.push("/login")
        })
}