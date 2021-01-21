import { Container } from "../restricted-acess/styles";
import logo from "../../images/logo/logo.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container>
      <div id="about-page">
        <img src={logo} alt="Logo" />
        <p className="info">essa página</p>
        <p className="info">não existe</p>
        <Link className="link" to="/">
          voltar
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;
