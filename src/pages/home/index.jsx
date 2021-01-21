import Footer from "../../components/footer";
import Header from "../../components/header";
import Carousel from "../../components/carousel";
import { Main, Container } from "./styled";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Main>
      <Header />
      <Carousel />
      <h1 style={{ fontSize: "34px", marginTop: "3vh", marginBottom: "3vh" }}>
        Aproveite mais seus momentos de lazer, deixe que nossos chef’s cuidem da
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
          <h2
            style={{
              fontWeight: "300",
              fontSize: "22px",
              textTransform: "uppercase",
            }}
          >
            Missão
          </h2>
          <p style={{ marginBottom: "6vh" }}>
            Nossa missão é proporcionar para os clientes, melhores experiências
            culinárias e que possam aproveitar melhor seu tempo com a família e
            amigos
          </p>
          <Link
            className="button"
            to="/chefs"
            style={{ textTransform: "uppercase" }}
          >
            Ver chefs
          </Link>
        </div>
      </Container>
      <Footer />
    </Main>
  );
};

export default HomePage;
