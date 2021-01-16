import React from "react";
import { Link } from "react-router-dom";
import { Main, Box, BoxContent, Film, Options, Footer } from "./styled";
import Logo from "../../images/logo/logo.png";

import LoginForm from "../../components/forms/login-form";

const Login = () => {

  return (
    <>
      <Main>
        <aside />
        <div className="background">
          <Film>
            <Options>
              <Link className="links" to="/">
                VOLTAR
              </Link>
              <Link className="links" to="/register">
                CADASTRE
              </Link>
            </Options>
            <Box>
              <img src={Logo} alt="Logo" />
              <BoxContent>
                <h2>LOGIN</h2>
                <LoginForm />
              </BoxContent>
            </Box>
            <Footer>
              DEIXA QUE EU FAÇO
              <p> &#169; Todos os direitos reservados</p>
            </Footer>
          </Film>
        </div>
      </Main>
    </>
  );
};

export default Login;
