import NewServiceForm from "../../components/forms/new-service-form";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../../components/header";
import Footer from "../../components/footer";

const NewService = () => {
  const { chefId } = useParams();
  const users = useSelector((state) => state.users);
  const currentChef = users.find(({ id, isChef }) => {
    return id === Number(chefId) && isChef;
  });

  return (
    <>
      <Header />
      <h2>New Service</h2>
      <NewServiceForm chef={currentChef} />
      <Footer />
    </>
  );
};

export default NewService;
