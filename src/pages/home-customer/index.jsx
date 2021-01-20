import { Container } from "./styles";
import HomeCustomerOptions from "../../components/home-customer-options";
import Header from "../../components/header";
import Footer from "../../components/footer";
import BestChefs from "../../components/best-chefs-list";
import { useState } from "react";
import { Switch } from "@material-ui/core";

const HomeCustomer = ({ bests }) => {
  let user = JSON.parse(localStorage.getItem("userData"));
  const [showTopFive, setShowTopFive] = useState(false);
  const handleTopFive = () => {
    setShowTopFive(!showTopFive);
  };
  console.log(bests);
  return (
    <>
      <Header />
      <Container>
        <div id="box-welcome">
          <h1 className="welcome-message message-one">Olá {user.name}</h1>
          <h3 className="welcome-message message-two">Seja Bem Vindo</h3>
        </div>
        <HomeCustomerOptions />
        <h3 className="title-best-chefs">Os melhores do Deixa que eu Faço</h3>
        <div style={{ display: "flex" }}>
          <Switch onChange={handleTopFive} />
          {showTopFive ? (
            <p
              style={{
                fontSize: "13px",
                color: "#9E5642",
                textTransform: "uppercase",
              }}
            >
              Top cinco chefs
            </p>
          ) : (
            <p
              style={{
                fontSize: "13px",
                color: "#9E5642",
                textTransform: "uppercase",
              }}
            >
              Top três chefs
            </p>
          )}
        </div>
        <div id="best-chefs">
          <BestChefs chefs={bests} showTopFive={showTopFive} />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default HomeCustomer;
