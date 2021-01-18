import CardChef from "../../components/card-chef";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Carousel from "../../components/carousel";
import { Button } from "@material-ui/core";
import { useParams, useHistory } from "react-router-dom";

const FilteredChefList = ({ users }) => {
  console.log(users);
  const { specific_expertise } = useParams();
  console.log(specific_expertise);
  const filteredList = users.filter(
    (actual) => actual.expertise === specific_expertise
  );
  console.log(filteredList);
  const history = useHistory();

  return (
    <>
      <Header />
      <Carousel />
      {filteredList.map((currentChef, index) => (
        <CardChef key={index} currentChef={currentChef} />
      ))}
      <Footer />
      <Button color="primary" onClick={() => history.push("/chefs")}>
        Voltar para todos
      </Button>
    </>
  );
};

export default FilteredChefList;
