import { useEffect, useState } from "react";
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
    marginBottom: "7vh",
    textAlign: "center",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignSelf: "center",
  },
  button: {
    width: "30vw",
    alignSelf: "center",
    border: "1px solid #9e5642",
    color: "#9e5642",
    marginBottom: "1vh",
    [theme.breakpoints.down(769)]: {
      width: "65vw",
    },
  },
}));

const ActiveServices = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const services = useSelector((state) => state.costumerServices);
  const history = useHistory();
  const [waiting, setWaiting] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [waitingRate, setWaitingRate] = useState(false);
  const [finished, setFinished] = useState(false);
  const [empty, setEmpty] = useState(true);

  const handleWaiting = () => {
    setWaiting(true);
    setAccepted(false);
    setWaitingRate(false);
    setFinished(false);
    setEmpty(false);
  };

  const handleAccepted = () => {
    setWaiting(false);
    setAccepted(true);
    setWaitingRate(false);
    setFinished(false);
    setEmpty(false);
  };

  const handleWaitingRate = () => {
    setWaiting(false);
    setAccepted(false);
    setWaitingRate(true);
    setFinished(false);
    setEmpty(false);
  };

  const handleFinished = () => {
    setWaiting(false);
    setAccepted(false);
    setWaitingRate(false);
    setFinished(true);
    setEmpty(false);
  };

  const servicesWaitingAccept = services.filter(
    (actual) => actual.status === "waiting"
  );

  const servicesWaitingDate = services.filter(
    (actual) => actual.status === "accepted"
  );

  const servicesWaitingRate = services.filter((actual) => {
    if (!actual.rate) {
      return actual.status === "finished";
    }
    return null;
  });

  const finishedServices = services.filter((actual) => {
    if (actual.rate) {
      return actual.status === "finished";
    }
    return null;
  });

  console.log(servicesWaitingDate);

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
        <h1 className={classes.title}>Contratos:</h1>
        <div className={classes.buttonsContainer}>
          <Button className={classes.button} onClick={handleWaiting}>
            Pendentes
          </Button>
          <Button className={classes.button} onClick={handleAccepted}>
            Aguardando data
          </Button>
          <Button className={classes.button} onClick={handleWaitingRate}>
            Aguardando avaliação
          </Button>
          <Button className={classes.button} onClick={handleFinished}>
            Finalizados
          </Button>
        </div>
        <div>
          {waiting && (
            <>
              {servicesWaitingAccept && (
                <h2 className={classes.title}>Contratos pendentes: </h2>
              )}
              {servicesWaitingAccept.map((actual) => {
                return <ServiceCard service={actual} />;
              })}
              {!servicesWaitingAccept && (
                <h2 className={classes.title}>Nenhum contrato pendente </h2>
              )}
            </>
          )}
          {accepted && (
            <>
              {servicesWaitingDate && (
                <h2 className={classes.title}>Aguardando data: </h2>
              )}
              {servicesWaitingDate.map((actual) => {
                return <ServiceCard service={actual} />;
              })}
              {servicesWaitingDate && (
                <h2 className={classes.title}>
                  Nenhum contrato aguardando data
                </h2>
              )}
            </>
          )}
          {waitingRate && (
            <>
              {servicesWaitingDate && (
                <h2 className={classes.title}>Aguardando avaliação: </h2>
              )}
              {servicesWaitingRate.map((actual) => {
                return <ServiceCard service={actual} />;
              })}
              {!servicesWaitingDate && (
                <h2 className={classes.title}>
                  Nenhum contrato aguardando avaliação
                </h2>
              )}
            </>
          )}
          {finished && (
            <>
              {finishedServices && (
                <h2 className={classes.title}>Contratos finalizados: </h2>
              )}
              {finishedServices.map((actual) => {
                return <ServiceCard service={actual} />;
              })}
              {!finishedServices && (
                <h2 className={classes.title}>Nenhum contrato finalizado </h2>
              )}
            </>
          )}
          {empty && (
            <h1 className={classes.title}>Selecione um tipo de serviço</h1>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ActiveServices;
