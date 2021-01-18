import CardChef from "../../components/card-chef";
import Footer from "../../components/footer";
import Header from "../../components/header";

const ChefList = ({ users }) => {
  return (
    <>
      <Header />
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
