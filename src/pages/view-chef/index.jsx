import ViewProfile from "../../components/view-profile";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, BioContainer, ButtonProfile } from "./styles";
import Footer from "../../components/footer";
import Header from "../../components/header";

const ViewChef = () => {
  const { id } = useParams();
  const [currentChef, setCurrentChef] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api-deixa-que-eu-faco.herokuapp.com/users/${id}`)
      .then((res) => setCurrentChef(res.data));
  }, [id]);
  return (
    <>
      <Header />
      <Container>
        <div id="back">
          <Link className="links" to="/">
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
      {/* <Footer /> */}
    </>
  );
};

export default ViewChef;
