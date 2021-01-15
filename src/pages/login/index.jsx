import React, { useState } from "react";
import "./style/style.css";
import { Link } from "react-router-dom";
import {
  Main,
  Box,
  BoxContent,
  Pelicula,
  Options,
  Footer,
} from "./style/styled";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { useForm } from "react-hook-form";
import Logo from "../../images/logo/logo.png";
import axios from "axios";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [switchOn, setSwitchOn] = useState(true);
  const url = "https://api-deixa-que-eu-faco.herokuapp.com/login";

  const handleChange = () => {
    setSwitchOn(!switchOn);
  };

  // console.log("Value Switch: ", switchOn);

  const handleLogin = (data) => {
    console.log("Data: ", data);
    axios
      .post(url, data)
      .then((res) => {
        console.log("Token: ", res.data.accessToken);
        window.localStorage.setItem("authToken", res.data.accessToken);
      })
      .catch(() => console.log("login ou senha incorretos"));
  };

  return (
    <>
      <Main>
        <div className="background">
          <Pelicula>
            <Options>
              <Link className="links" to="/">
                VOLTAR
              </Link>
              <Link className="links" to="/">
                CADASTRE
              </Link>
            </Options>
            <Box>
              <img src={Logo} alt="Logo" />
              <BoxContent>
                <h2>LOGIN</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                  <TextField
                    required
                    label="Email"
                    variant="outlined"
                    className="input"
                    name="email"
                    inputRef={register}
                  />
                  <TextField
                    required
                    label="Password"
                    variant="outlined"
                    className="input"
                    name="password"
                    inputRef={register}
                  />
                  <FormControlLabel
                    className="switch"
                    name="isChef"
                    control={
                      <Switch checked={switchOn} onChange={handleChange} />
                    }
                    label="Você é nosso Chef?"
                    inputRef={register}
                  />
                  <button type="submit">ENTRAR</button>
                </form>
              </BoxContent>
            </Box>
            <Footer>
              DEIXA QUE EU FAÇO
              <p> &#169; Todos os direitos reservados</p>
            </Footer>
          </Pelicula>
        </div>
      </Main>
    </>
  );
};

export default Login;
