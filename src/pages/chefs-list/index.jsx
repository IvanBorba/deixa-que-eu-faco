import CardChef from "../../components/card-chef";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Carousel from "../../components/carousel";
import { Container, Expertise, ArrowRight } from "./styles";
import { Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";

const ChefList = ({ users }) => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const history = useHistory();

  const handleRedirect = () => {
    !user
      ? history.push("/")
      : user.isChef
      ? history.push("/home-chef")
      : history.push("/home-customer");
  };

  return (
    <>
      <Header />
      <Carousel />
      <Expertise>CHEFS {<ArrowRight />} TODOS</Expertise>
      <Container>
        {users
          .filter(({ isChef }) => isChef)
          .map((currentChef, index) => (
            <CardChef key={index} currentChef={currentChef} isCenter />
          ))}
      </Container>
      <Button
        color="primary"
        onClick={handleRedirect}
        style={{ marginBottom: "3vh" }}
      >
        {" "}
        <ArrowBackIcon color="primary" />
        Voltar
      </Button>
      <Footer />
    </>
  );
};

export default ChefList;
