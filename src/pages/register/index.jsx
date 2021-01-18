import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./index.css";
import logo from "../../images/logo/logo.png";
import RegisterForm from "../../components/forms/register-form";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PeopleIcon from "@material-ui/icons/People";

const RegisterPage = () => {
  const [chefRegister, setChefRegister] = useState(false);

  const history = useHistory();
  return (
    <div className="pageBox">
      <div className={!chefRegister ? "desktopImage" : "desktopImageChef"} />
      <div className={!chefRegister ? "registerBox" : "registerBoxCheff"}>
        <div className="Film">
          <div className="topButtons">
            <Button
              style={{ color: "#9E5642", textTransform: "uppercase" }}
              onClick={() => history.push("/")}
            >
              {" "}
              <ArrowBackIcon /> Voltar
            </Button>
            <Button
              style={{ color: "#9E5642", textTransform: "uppercase" }}
              onClick={() => history.push("/login")}
            >
              Login &nbsp;
              <PeopleIcon />
            </Button>
          </div>
          <div className={!chefRegister ? "theForm" : "theFormChef"}>
            <img
              alt="carregando"
              src={logo}
              className={!chefRegister ? "registerLogo" : "registerLogoChef"}
            />
            <span
              style={
                !chefRegister
                  ? {
                      position: "relative",
                      top: 25,
                      color: "#9E5642",
                      transition: "1s",
                      textTransform: "uppercase",
                    }
                  : {
                      position: "relative",
                      top: -30,
                      color: "#9E5642",
                      transition: "1s",
                      textTransform: "uppercase",
                    }
              }
            >
              Cadastre-se como {!chefRegister ? "CLIENTE" : "CHEFE"}
            </span>
            <RegisterForm
              chefRegister={chefRegister}
              setChefRegister={setChefRegister}
            />
          </div>

          <div className="registerFooter">
            <span style={{ fontWeight: "700", textTransform: "uppercase" }}>
              Deixa que eu faço
            </span>
            <span>© Todos os direitos reservados.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
