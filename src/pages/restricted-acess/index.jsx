import { Container } from "./styles";
import logo from "../../images/logo/logo.png";
import { Link } from "react-router-dom";

const RestrictedAcess = () => {
  return (
    <Container>
      <div id="about-page">
        <img src={logo} alt="Logo" />
        <p className="info">você não tem</p>
        <p className="info">permissão para</p>
        <p className="info">acessar essa página</p>
        <Link className="link" to="/">
          voltar
        </Link>
      </div>
    </Container>
  );
};

export default RestrictedAcess;
