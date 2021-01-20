import React from "react";
import { useHistory } from "react-router-dom";
import { Main, Box, BoxContent, Film, Options, Footer } from "./styled";
import Logo from "../../images/logo/logo.png";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Button } from "@material-ui/core";
import LoginForm from "../../components/forms/login-form";

const Login = () => {
  const history = useHistory();
  return (
    <>
      <Main>
        <aside />
        <div className="background">
          <Film>
            <Options>
              <Button
                style={{ color: "#9E5642", textTransform: "uppercase" }}
                onClick={() => history.push("/")}
              >
                {" "}
                <ArrowBackIcon /> Voltar
              </Button>
              <Button
                style={{ color: "#9E5642", textTransform: "uppercase" }}
                onClick={() => history.push("/register")}
              >
                Cadastre-se &nbsp;
                <AssignmentIcon />
              </Button>
            </Options>
            <Box>
              <img src={Logo} alt="Logo"/>
              <BoxContent>
                <h2 style={{ textTransform: "uppercase" }}>Login</h2>
                <LoginForm />
              </BoxContent>
            </Box>
            <Footer style={{ textTransform: "uppercase" }}>
              Deixa que eu faço
              <p> &#169; Todos os direitos reservados</p>
            </Footer>
          </Film>
        </div>
      </Main>
    </>
  );
};

export default Login;
