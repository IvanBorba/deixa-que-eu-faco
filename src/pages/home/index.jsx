import Footer from "../../components/footer";
import Header from "../../components/header";
import Carousel from "../../components/carousel";
import { Main, Container } from "./styled";

const HomePage = () => {
  return (
    <Main>
      <Header />
      <Carousel />
      <h1>
        Aproveite mais seus momentos de lazer, deixe que nossos chef’s cuide da
        cozinha
      </h1>
      <Container>
        <div className="img">
          <img
            src="https://i.pinimg.com/736x/1a/d5/f9/1ad5f9915f02fb5d5576f967a2680d36.jpg"
            alt="Almoço entre amigos"
          />
        </div>
        <div className="mission">
          <h2>Missão</h2>
          <p>
            Nossa missão é proporcionar para os clientes, melhores experiências
            culinárias e que possam aproveitar melhor seu tempo com a família e
            amigos
          </p>
        </div>
      </Container>
      <Footer />
    </Main>
  );
};

export default HomePage;
