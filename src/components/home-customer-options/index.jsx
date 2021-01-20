import { Container, Ball } from "./styles";
import { Link } from "react-router-dom";

const HomeCustomerOptions = () => {
  return (
    <Container>
      <Ball>
        <Link
          className="links"
          to="/chefs"
          style={{ textTransform: "uppercase" }}
        >
          Ver todos os chefs
        </Link>
      </Ball>
      <Ball secondary>
        <Link
          className="links"
          to="/active-services"
          style={{ textTransform: "uppercase" }}
        >
          Contratos atuais
        </Link>
      </Ball>
      <Ball>
        <Link
          className="links"
          to="/settings"
          style={{ textTransform: "uppercase" }}
        >
          Editar perfil
        </Link>
      </Ball>
    </Container>
  );
};

export default HomeCustomerOptions;
