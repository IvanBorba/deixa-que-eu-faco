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
} from "@material-ui/core";
import { newServiceSchema } from "../../../helper";
import { registerService } from "../../../requests";

const useStyles = makeStyles((theme) => ({}));

const NewServiceForm = ({ chef }) => {
  const classes = useStyles();
  const [guests, setGuests] = useState("");
  const [ingredients, setIngredients] = useState(false);
  const actualUser = JSON.parse(localStorage.getItem("userData"));
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(newServiceSchema),
  });

  const handleRegister = (data) => {
    data.address = `${data.street}, ${data.city} - ${data.state}`;
    delete data.street;
    delete data.city;
    delete data.state;

    data.clientId = actualUser.id;
    data.clientName = actualUser.name;
    data.chefId = chef.id;
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
    delete data.ingredients;

    data.status = "waiting";

    registerService(data);
  };

  const handleIngredientNeed = (e) => {
    e.preventDefault();
    setIngredients(!ingredients);
  };

  const handleGuests = (e) => {
    setGuests(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "20vw",
        margin: "0 auto",
      }}
    >
      <form onSubmit={handleSubmit(handleRegister)}>
        <p style={{ fontSize: "x-small", color: "red", alignSelf: "center" }}>
          {errors.street?.message ||
            errors.city?.message ||
            errors.state?.message ||
            errors.ingredients?.message}
        </p>
        <TextField
          className={classes.input}
          variant="outlined"
          label="Rua"
          name="street"
          inputRef={register}
          error={!!errors.street}
        />
        <TextField
          className={classes.input}
          variant="outlined"
          label="Cidade"
          name="city"
          inputRef={register}
          error={!!errors.city}
        />
        <TextField
          className={classes.input}
          variant="outlined"
          label="Estado"
          name="state"
          inputRef={register}
          error={!!errors.state}
        />
        <FormControl variant="outlined">
          <InputLabel
            htmlFor="outlined-age-native-simple"
            id="demo-simple-select-outlined-label"
          >
            Convidados
          </InputLabel>
          <Select
            label="Convidados"
            onChange={handleGuests}
            value={guests}
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
          >
            <MenuItem value={"Menos de 10"}>Menos de 10</MenuItem>
            <MenuItem value={"De 10 a 50"}>De 10 a 50</MenuItem>
            <MenuItem value={"Mais de 50"}>Mais de 50</MenuItem>
          </Select>
        </FormControl>
        <Typography>Precisa levar ingredientes?</Typography>
        {!ingredients && <button onClick={handleIngredientNeed}>Sim</button>}
        {ingredients && <button onClick={handleIngredientNeed}>Não</button>}
        {ingredients === true && (
          <TextField
            className={classes.input}
            variant="outlined"
            label="Ingredientes"
            name="ingredients"
            type="ingredients"
            inputRef={register}
            error={!!errors.ingredients}
          />
        )}
        <TextField
          className={classes.input}
          variant="outlined"
          label="Data"
          name="date"
          type="date"
          inputRef={register}
          error={!!errors.ingredients}
        />
        <button type="submit">Contratar</button>
      </form>
    </div>
  );
};

export default NewServiceForm;
