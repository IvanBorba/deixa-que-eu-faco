import CardChef from "../../components/card-chef";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Carousel from "../../components/carousel";
import { Button } from "@material-ui/core";
import { useParams, useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const FilteredChefList = ({ users }) => {
  const { specific_expertise } = useParams();
  const filteredList = users.filter(
    (actual) => actual.expertise === specific_expertise
  );

  const history = useHistory();

  return (
    <>
      <Header />
      <Carousel />
      {filteredList.map((currentChef, index) => (
        <CardChef key={index} currentChef={currentChef} />
      ))}
      <Button
        color="primary"
        onClick={() => history.push("/chefs")}
        style={{ marginBottom: "3vh" }}
      >
        <ArrowBackIcon color="primary" /> Voltar
      </Button>
      <Footer />
    </>
  );
};

export default FilteredChefList;
