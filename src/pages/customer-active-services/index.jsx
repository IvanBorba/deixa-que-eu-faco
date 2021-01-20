import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { getCostumerServicesThunk } from "../../store/modules/services/thunk";
import { Button, makeStyles } from "@material-ui/core";
import ServiceCard from "../../components/card-service-customer";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "70vh",
  },
  title: {
    alignSelf: "center",
    color: "#9e5642",
    fontWeight: "200",
    textTransform: "uppercase",
    margin: "0 auto",
    marginTop: "11vh",
    marginBottom: "15vh",
  },
  subTitle: {
    alignSelf: "center",
    color: "#9e5642",
    fontWeight: "200",
    textTransform: "uppercase",
    margin: "0 auto",
    marginTop: "9vh",
    marginBottom: "12vh",
  },
}));

const ActiveServices = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const services = useSelector((state) => state.costumerServices);
  const history = useHistory();

  const servicesWaitingAccept = services.filter(
    (actual) => actual.status === "waiting"
  );

  const servicesWaitingDate = services.filter(
    (actual) => actual.status === "accepted"
  );

  const finishedServices = services.filter((actual) => {
    if (actual.rate) {
      return actual.status === "finished";
    }
  });

  const servicesWaitingRate = services.filter((actual) => {
    if (!actual.rate) {
      return actual.status === "finished";
    }
  });

  const actualServices = [...servicesWaitingAccept, ...servicesWaitingDate];

  useEffect(() => {
    dispatch(getCostumerServicesThunk());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Button onClick={() => history.push("/home-customer")} color="primary">
        {" "}
        <ArrowBackIcon color="primary" />
        Voltar
      </Button>
      <div className={classes.container}>
        <h1 className={classes.title}>Serviços atuais:</h1>
        <div>
          {actualServices.map((actual) => {
            return <ServiceCard service={actual} />;
          })}
        </div>
        <h2 className={classes.subTitle}>Aguardando avaliação: </h2>
        <div>
          {servicesWaitingRate.map((actual) => {
            return <ServiceCard service={actual} />;
          })}
        </div>
        <h2 className={classes.subTitle}>Serviços antigos: </h2>
        <div>
          {finishedServices.map((actual) => {
            return <ServiceCard service={actual} />;
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ActiveServices;
