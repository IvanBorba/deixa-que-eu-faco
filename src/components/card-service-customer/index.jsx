import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { updateProfile, updateService } from "../../requests";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    margin: "0 auto",
    width: "30vw",
    height: "20vh",
    border: "5px solid #9e5642;",
    backgroundColor: "#f5e0cc",
    marginBottom: "2vh",
  },
  chefName: {
    color: "#9e5642",
    textTransform: "uppercase",
    marginLeft: "1vw",
  },
  chefAddress: {
    color: "#9e5642",
    textTransform: "uppercase",
    marginLeft: "1vw",
    fontSize: "12px",
  },
  serviceValue: {
    color: "green",
    fontWeight: "300",
    marginLeft: "22vw",
    marginTop: "1vh",
  },
  status: {
    color: "red",
    textTransform: "uppercase",
    marginLeft: "1vw",
  },
  statusFinished: {
    color: "green",
    textTransform: "uppercase",
    marginLeft: "1vw",
  },
  rateInput: {
    marginTop: "1vh",
    maxHeight: "5vh",
    width: "5vw",
  },
  rateButton: {
    border: "1px solid #9e5642",
    textTransform: "uppercase",
    marginLeft: "16vw",
    marginTop: "2.1vh",
    padding: 0,
    height: "3vh",
    width: "10vw",

    "& :hover": {
      color: "#ffffff",
      backgroundColor: "#9e5642",
    },
  },
}));

const ServiceCard = ({ service }) => {
  const classes = useStyles();
  const users = JSON.parse(localStorage.getItem("users"));
  const chefs = users.filter((actual) => actual.isChef);
  const chef = chefs.find((actual) => actual.id === service.chefId);
  const [rate, setRate] = useState(0);
  const { status } = service;

  const handleRate = (e) => {
    setRate(e.target.value);
  };

  const handleServiceUpdate = (e) => {
    e.preventDefault();
    let serviceData = {
      rate: rate,
    };
    let userData = {
      rate: [...chef.rate, rate],
    };

    updateService(serviceData, service.id, userData, chef.id);
  };

  return (
    <div className={classes.root}>
      <Paper elevation={5} className={classes.paper}>
        <p className={classes.chefName}>Chef: {chef.name}</p>
        <p className={classes.chefAddress}>Endereço: {service.address}</p>
        <p className={classes.chefAddress}>
          Número de convidados: {service.guests}
        </p>
        <h4 className={classes.serviceValue}>Valor: R${service.price},00</h4>
        <p
          className={
            status === "finished" && service.rate
              ? classes.statusFinished
              : classes.status
          }
        >
          Status:{" "}
          {status === "waiting"
            ? "Aguardando chef"
            : status === "finished" && service.rate
            ? "Finalizado"
            : "Aguardando avaliação"}
        </p>
        {status === "finished" && !service.rate && (
          <form
            style={{ display: "flex", margin: "0 auto" }}
            onSubmit={handleServiceUpdate}
          >
            <FormControl variant="outlined">
              <InputLabel
                htmlFor="outlined-age-native-simple"
                id="demo-simple-select-outlined-label"
                className={classes.rateInput}
              >
                Nota
              </InputLabel>
              <Select
                className={classes.rateInput}
                label="Estado"
                onChange={handleRate}
                value={rate}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
              >
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </Select>
            </FormControl>
            <Button
              color="primary"
              className={classes.rateButton}
              type="submit"
            >
              Enviar avaliação
            </Button>
          </form>
        )}
      </Paper>
    </div>
  );
};

export default ServiceCard;
