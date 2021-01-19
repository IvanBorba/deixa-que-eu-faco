import { Container, Ball } from "./styles";
import { Link } from "react-router-dom";

const HomeCustomerOptions = () => {
  return (
    <Container>
      <Ball>
        <Link className="links" to="/chefs">
          VER TODOS
        </Link>
      </Ball>
      <Ball secondary>
        <Link className="links" to="/chefs">
          FAVORITOS
        </Link>
      </Ball>
      <Ball>
        <Link className="links" to="/chefs">
          CONTRATAR DE NOVO
        </Link>
      </Ball>
    </Container>
  );
};

export default HomeCustomerOptions;
