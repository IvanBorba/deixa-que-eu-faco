import { Container, Ball } from "./styles";
import { useHistory } from "react-router-dom";

const HomeCustomerOptions = () => {
  const history = useHistory();
  return (
    <Container>
      <Ball onClick={() => history.push("/chefs")}>Ver todos os chefs</Ball>
      <Ball secondary onClick={() => history.push("/active-services")}>
        Contratos atuais
      </Ball>
      <Ball onClick={() => history.push("/settings")}>Editar perfil</Ball>
    </Container>
  );
};

export default HomeCustomerOptions;
