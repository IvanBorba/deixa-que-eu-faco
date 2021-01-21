import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormControl,
  InputLabel,
  Select,
  TextField,
  makeStyles,
  Typography,
  MenuItem,
  Button,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { newServiceSchema } from "../../../helper";
import { registerService } from "../../../requests";
import { useHistory } from "react-router-dom";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    width: "30vw",
    marginBottom: "1.5vh",
    borderColor: "#9E5642",
    backgroundColor: "white",
    [theme.breakpoints.down(769)]: {
      width: "70vw",
    },
  },
  ingredientsInput: {
    width: "30vw",
    marginBottom: "1.5vh",
    borderColor: "#9E5642",
    backgroundColor: "white",
    [theme.breakpoints.down(769)]: {
      width: "70vw",
    },
  },
  ingredientSubTitle: {
    textTransform: "uppercase",
    fontSize: "16px",
    letterSpacing: "-1px",
    color: "#9E5642",
    [theme.breakpoints.down(426)]: {
      fontSize: "12px",
    },
  },
  ingredientGreenButton: {
    width: "10vw",
    border: "1px solid #049d13",
    color: "#049d13",
    borderRadius: "5%",
    marginTop: "1vh",
    marginBottom: "2vh",
    padding: "0",

    "& :hover": {
      backgroundColor: "#049d13",
      color: " #ffffff",
    },

    [theme.breakpoints.down(769)]: {
      width: "40vw",
    },
  },
  ingredientRedButton: {
    width: "10vw",
    border: "1px solid red",
    color: "red",
    borderRadius: "5%",
    marginTop: "1vh",
    marginBottom: "2vh",
    padding: 0,

    "& :hover": {
      backgroundColor: "red",
      color: " #ffffff",
    },

    [theme.breakpoints.down(769)]: {
      width: "40vw",
    },
  },
  price: {
    color: "#049d13",
    fontWeight: "200",
  },
  button: {
    width: "22vw",
    border: "2px solid #049d13",
    color: "#049d13",
    borderRadius: "5%",
    marginTop: "4vh",
    marginBottom: "10vh",
    marginLeft: "65vw",
    padding: 0,

    [theme.breakpoints.down(769)]: {
      width: "55vw",
      height: "10vh",
      margin: "0",
      marginBottom: "7vh",
    },

    [theme.breakpoints.up(769)]: {
      "& :hover": {
        backgroundColor: "#049d13",
        color: " #ffffff",
      },
    },
  },
}));

const NewServiceForm = ({ chef }) => {
  const classes = useStyles();
  const history = useHistory();
  const [guests, setGuests] = useState("");
  const [regionalState, setRegionalState] = useState("");
  const [errorFeedback, setErrorFeedback] = useState("");
  const [ingredients, setIngredients] = useState(false);
  const [success, setSuccess] = useState(false);
  const actualUser = JSON.parse(localStorage.getItem("userData"));

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(newServiceSchema),
  });

  const handleClose = () => {
    setSuccess(false);
    history.push("/home-customer");
  };

  const handleRegister = (data) => {
    if (regionalState === "") {
      setErrorFeedback("Informe o Estado");
      return;
    }
    data.address = `${data.street}, ${data.city} - ${regionalState}`;
    delete data.street;
    delete data.city;
    console.log(regionalState);
    data.state = regionalState;

    data.clientId = actualUser.id;
    data.clientName = actualUser.name;
    data.chefId = chef.id;

    if (guests === "") {
      setErrorFeedback("Informe o número de convidados");
      return;
    }
    data.guests = guests;

    if (guests === "Menos de 10") {
      data.price = chef.price * 10;
    } else if (guests === "De 10 a 50") {
      data.price = chef.price * 25;
    } else if (guests === "Mais de 50") {
      data.price = chef.price * 50;
    }

    data.market = ingredients;
    if (ingredients) {
      data.marketProducts = data.ingredients;
    }
    if (data.ingredients === "") {
      setErrorFeedback("Informe os ingredientes.");
      return;
    }
    if (data.date === "") {
      setErrorFeedback("Informe a data.");
      return;
    }
    delete data.ingredients;

    data.status = "waiting";
    console.log(data);
    registerService(data, setSuccess);
    if (success) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  };

  const handleIngredientNeed = (e) => {
    e.preventDefault();
    setIngredients(!ingredients);
  };

  const handleGuests = (e) => {
    e.preventDefault();
    setGuests(e.target.value);
    console.log(guests);
  };

  const handleRegionalState = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setRegionalState(e.target.value);
    console.log(regionalState);
  };

  return (
    <form onSubmit={handleSubmit(handleRegister)} className={classes.form}>
      <TextField
        className={classes.input}
        label="Rua/avenida e número"
        name="street"
        inputRef={register}
      />
      <TextField
        className={classes.input}
        label="Cidade"
        name="city"
        inputRef={register}
      />
      <FormControl variant="filled">
        <InputLabel
          htmlFor="outlined-age-native-simple"
          id="demo-simple-select-outlined-label"
        >
          Estado
        </InputLabel>
        <Select
          className={classes.input}
          label="Estado"
          onChange={handleRegionalState}
          value={regionalState}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
        >
          <MenuItem value={""}>Selecione o Estado</MenuItem>
          <MenuItem value={"AC"}>Acre</MenuItem>
          <MenuItem value={"AL"}>Alagoas</MenuItem>
          <MenuItem value={"AP"}>Amapá</MenuItem>
          <MenuItem value={"AM"}>Amazonas</MenuItem>
          <MenuItem value={"BA"}>Bahia</MenuItem>
          <MenuItem value={"CE"}>Ceará</MenuItem>
          <MenuItem value={"DF"}>Distrito Federal</MenuItem>
          <MenuItem value={"ES"}>Espírito Santo</MenuItem>
          <MenuItem value={"GO"}>Goiás</MenuItem>
          <MenuItem value={"MA"}>Maranhão</MenuItem>
          <MenuItem value={"MT"}>Mato Grosso</MenuItem>
          <MenuItem value={"MS"}>Mato Grosso do Sul</MenuItem>
          <MenuItem value={"MG"}>Minas Gerais</MenuItem>
          <MenuItem value={"PA"}>Pará</MenuItem>
          <MenuItem value={"PB"}>Paraíba</MenuItem>
          <MenuItem value={"PR"}>Paraná</MenuItem>
          <MenuItem value={"PE"}>Pernambuco</MenuItem>
          <MenuItem value={"PI"}>Piauí</MenuItem>
          <MenuItem value={"RJ"}>Rio de Janeiro</MenuItem>
          <MenuItem value={"RN"}>Rio Grande do Norte</MenuItem>
          <MenuItem value={"RS"}>Rio Grande do Sul</MenuItem>
          <MenuItem value={"RO"}>Rondônia</MenuItem>
          <MenuItem value={"RR"}>Roraima</MenuItem>
          <MenuItem value={"SC"}>Santa Catarina</MenuItem>
          <MenuItem value={"SP"}>São Paulo</MenuItem>
          <MenuItem value={"SE"}>Sergipe</MenuItem>
          <MenuItem value={"TO"}>Tocantins</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled">
        <InputLabel
          htmlFor="outlined-age-native-simple"
          id="demo-simple-select-outlined-label2"
        >
          Convidados
        </InputLabel>
        <Select
          className={classes.input}
          label="Convidados"
          onChange={handleGuests}
          value={guests}
          labelId="demo-simple-select-outlined-label2"
          id="demo-simple-select-outlined2"
        >
          <MenuItem value={""}>Escolha o número</MenuItem>
          <MenuItem value={"Menos de 10"}>Menos de 10</MenuItem>
          <MenuItem value={"De 10 a 50"}>De 10 a 50</MenuItem>
          <MenuItem value={"Mais de 50"}>Mais de 50</MenuItem>
        </Select>
      </FormControl>
      <Typography className={classes.ingredientSubTitle}>
        Precisa levar ingredientes ou útensilios?
      </Typography>
      {!ingredients && (
        <Button
          onClick={handleIngredientNeed}
          className={classes.ingredientGreenButton}
        >
          Sim
        </Button>
      )}
      {ingredients && (
        <Button
          onClick={handleIngredientNeed}
          className={classes.ingredientRedButton}
        >
          Não
        </Button>
      )}
      {ingredients === true && (
        <TextField
          className={classes.ingredientsInput}
          label="Lista"
          name="ingredients"
          inputRef={register}
          multiline
          rows={3}
        />
      )}
      <TextField
        className={classes.input}
        label="Data"
        name="date"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        inputRef={register}
      />
      <p style={{ color: "red", alignSelf: "center" }}>
        {errors.street?.message ||
          errors.city?.message ||
          errors.state?.message ||
          errors.ingredients?.message ||
          errorFeedback}
      </p>
      {guests && (
        <h2 className={classes.price}>
          Preço: R$
          {guests === "Menos de 10"
            ? chef.price * 10
            : guests === "De 10 a 50"
            ? chef.price * 25
            : chef.price * 50}
          ,00
        </h2>
      )}
      <Button type="submit" className={classes.button}>
        Contratar
      </Button>
      <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Pedido enviado com sucesso
        </Alert>
      </Snackbar>
    </form>
  );
};

export default NewServiceForm;
