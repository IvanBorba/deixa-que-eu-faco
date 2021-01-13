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
// import axios from "axios";

const Login = () => {
  const [switchOn, setSwitchOn] = useState(true);

  const handleChange = (e) => {
    setSwitchOn(!switchOn);
  };

  console.log("Value Switch: ", switchOn);

  return (
    <>
      <Main>
        <aside></aside>
        <div className="background">
          <Pelicula>
            <Options>
              <Link className="links" to="/">
                VOLTAR
              </Link>
              <Link className="links" to="/">
                CADASTRE-SE
              </Link>
            </Options>
            <Box>
              <BoxContent>
                <h2>LOGIN</h2>
                <form onSubmit={""}>
                  <TextField
                    required
                    label="Login"
                    variant="outlined"
                    className="input"
                    name="login"
                  />
                  <TextField
                    required
                    label="Password"
                    variant="outlined"
                    className="input"
                    name="password"
                  />
                  <FormControlLabel
                    className="switch"
                    control={
                      <Switch checked={switchOn} onChange={handleChange} />
                    }
                    label="Você é nosso Chef?"
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
