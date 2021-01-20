import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { getCostumerServicesThunk } from "../../store/modules/services/thunk";
import { makeStyles } from "@material-ui/core";
import ServiceCard from "../../components/card-service-customer";

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
}));

const ActiveServices = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const services = useSelector((state) => state.costumerServices);
  console.log(services);

  const servicesWaitingAccept = services.filter(
    (actual) => actual.status === "waiting"
  );

  const servicesWaitingDate = services.filter(
    (actual) => actual.status === "accepted"
  );

  const actualServices = [...servicesWaitingAccept, ...servicesWaitingDate];

  useEffect(() => {
    dispatch(getCostumerServicesThunk());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className={classes.container}>
        <h1 className={classes.title}>Serviços pendentes</h1>
        <div className={classes.main}>
          {actualServices.map((actual) => {
            return <ServiceCard service={actual} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ActiveServices;
