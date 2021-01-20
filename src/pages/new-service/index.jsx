import NewServiceForm from "../../components/forms/new-service-form";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../../components/header";
import Footer from "../../components/footer";
import hatLogo from "../../images/hat.png";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    height: "15vh",
    justifyContent: "center",
    paddingTop: "15vh",
  },
  title: {
    textTransform: "uppercase",
    color: "#9E5642",
    marginRight: "3vw",
    fontWeight: "200",
  },
  hatLogo: {
    width: "5.2vw",
    height: "5.2vw",
    marginRight: "3vw",
  },
  main: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  subTitle: {
    textTransform: "uppercase",
    color: "#9E5642",
    fontWeight: "200",
    alignSelf: "center",
  },
}));

const NewService = () => {
  const classes = useStyles();
  const { chefId } = useParams();
  const users = useSelector((state) => state.users);
  const currentChef = users.find(({ id, isChef }) => {
    return id === Number(chefId) && isChef;
  });

  return (
    <>
      <Header />
      <div className={classes.container}>
        <div className={classes.header}>
          <h1 className={classes.title}>Contratar chef </h1>
          <img src={hatLogo} alt="hat" className={classes.hatLogo} />
        </div>
        <div className={classes.main}>
          <h3 className={classes.subTitle}>Informe os dados do evento:</h3>
        </div>
        <NewServiceForm chef={currentChef} />
      </div>
      <Footer />
    </>
  );
};

export default NewService;
