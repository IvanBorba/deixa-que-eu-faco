import CardChef from "../../components/card-chef";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Carousel from "../../components/carousel";

const ChefList = ({ users }) => {
  return (
    <>
      <Header />
      <Carousel />
      {users
        .filter(({ isChef }) => isChef)
        .map((currentChef, index) => (
          <CardChef key={index} currentChef={currentChef} />
        ))}
      <Footer />
    </>
  );
};

export default ChefList;
