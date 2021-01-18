import ViewProfile from "../../components/view-profile";
import { useParams, Link } from "react-router-dom";
import { Container, BioContainer, ButtonProfile } from "./styles";
import Header from "../../components/header";
import Footer from "../../components/footer";

const ViewChef = ({ users }) => {
  const { specific_id } = useParams();
  const currentChef = users.find(({ id, isChef }) => {
    return id === Number(specific_id) && isChef;
  });
  return (
    <>
      <Header />
      <Container>
        <div id="back">
          <Link className="links" to="/chefs">
            VOLTAR
          </Link>
        </div>
        {!!currentChef && <ViewProfile currentChef={currentChef} />}
        <BioContainer>
          <h1 className="title-bio">Sobre o Chef</h1>
          <div className="box-text">
            <p className="text">{!!currentChef && currentChef.bio}</p>
          </div>
        </BioContainer>
        <div id="hire">
          <ButtonProfile variant="outlined" size="large">
            CONTRATAR
          </ButtonProfile>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default ViewChef;
