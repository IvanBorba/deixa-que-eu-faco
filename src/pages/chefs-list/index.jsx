import CardChef from "../../components/card-chef";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Carousel from "../../components/carousel";
import { Container, Expertise, ArrowRight } from "./styles";

const ChefList = ({ users }) => {
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
      <Footer />
    </>
  );
};

export default ChefList;
