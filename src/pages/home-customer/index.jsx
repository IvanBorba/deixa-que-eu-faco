import { Container } from "./styles";
import CardChef from "../../components/card-chef";
import HomeCustomerOptions from "../../components/home-customer-options";
import Header from "../../components/header";
import Footer from "../../components/footer";

const HomeCustomer = ({ bests }) => {
  let user = JSON.parse(localStorage.getItem("userData"));
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
        <div id="best-chefs">
          {bests
            .filter(({ isChef }) => isChef)
            .map((bestChefs, index) => (
              <CardChef key={index} currentChef={bestChefs} isCenter />
            ))}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default HomeCustomer;
