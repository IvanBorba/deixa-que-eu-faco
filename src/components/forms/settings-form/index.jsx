import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  FormControl,
  InputLabel,
  Select,
  TextField,
  Button,
  Snackbar,
} from "@material-ui/core";
import "./index.css";
import { updateProfile } from "../../../requests";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { settingsSchema } from "../../../helper";
import { useHistory } from "react-router-dom";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#9E5642",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#9E5642",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#9E5642",
      },
      "&:hover fieldset": {
        borderColor: "#9E5642",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#9E5642",
      },
    },
  },
})(TextField);

const CssTextArea = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#9E5642",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#9E5642",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#9E5642",
      },
      "&:hover fieldset": {
        borderColor: "#9E5642",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#9E5642",
      },
    },
  },
})(TextField);

export const SettingsAvatar = ({ profilePhoto }) => {
  const name = JSON.parse(localStorage.getItem("userData")).name;
  return (
    <div className="avatarBox">
      <div className="theAvatar">
        {profilePhoto ? <img alt="profilePhoto" src={profilePhoto} /> : name[0]}
      </div>
      <h1 style={{ color: "#9E5642" }}>{name}</h1>
    </div>
  );
};

export const SettingsDatas = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(settingsSchema),
  });
  const [positiveFeedback, setPositiveFeedback] = useState(false);

  const [options, setOption] = useState({
    expertise: userData.expertise,
    experience: userData.experience,
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setPositiveFeedback(false);
  };

  const changeEspeciality = (event) => {
    const name = event.target.name;
    setOption({
      ...options,
      [name]: event.target.value,
    });
  };

  const handleProfileUpdate = (data) => {
    if (userData.isChef) {
      if (!options.expertise) {
        data.expertise = userData.expertise;
      } else data.expertise = options.expertise;
      if (!options.experience) {
        data.experience = userData.experience;
      } else data.experience = options.experience;
      if (!data.bio) {
        data.bio = userData.bio;
      }
      if (!data.price) {
        data.price = userData.price;
      }
    }

    if (!data.name) {
      data.name = userData.name;
    }
    if (!data.email) {
      data.email = userData.email;
    }

    updateProfile(data, userData.id);
    setPositiveFeedback(true);
  };

  return (
    <div className="dataBox">
      <form
        className="dataSettingsBox"
        onSubmit={handleSubmit(handleProfileUpdate)}
      >
        <h3
          style={{
            fontWeight: "lighter",
            textTransform: "uppercase",
            color: "#9E5642",
          }}
        >
          Atualize seus dados
        </h3>
        <h5
          style={{
            textTransform: "uppercase",
            color: "#9E5642",
            marginBottom: "2vh",
            marginTop: "2vh",
          }}
        >
          Edite seu nome:
        </h5>
        <CssTextField
          name="name"
          label=""
          margin="dense"
          fullWidth
          placeholder={userData.name}
          inputRef={register}
        />
        <h5
          style={{
            textTransform: "uppercase",
            color: "#9E5642",
            marginBottom: "2vh",
            marginTop: "2vh",
          }}
        >
          Edite seu e-mail:
        </h5>
        <CssTextField
          name="email"
          label=""
          margin="dense"
          fullWidth
          placeholder={userData.email}
          inputRef={register}
        />
        {userData.isChef && (
          <>
            <h5
              style={{
                marginTop: 10,
                textTransform: "uppercase",
                color: "#9E5642",
                marginBottom: "2vh",
              }}
            >
              Edite sua especialidade:
            </h5>
            <FormControl fullWidth style={{ marginTop: 20, marginBottom: 20 }}>
              <InputLabel htmlFor="outlined-age-native-simple">
                Especialidade
              </InputLabel>
              <Select
                native
                value={options.expertise}
                onChange={changeEspeciality}
                label="Especialidade"
                inputProps={{
                  name: "expertise",
                }}
              >
                <option aria-label="None" value="" />
                <option value={"Churrasco"}>Churrasco</option>
                <option value={"Japonesa"}>Japonesa</option>
                <option value={"Chinesa"}>Chinesa</option>
                <option value={"Vegetariano"}>Vegetariano</option>
                <option value={"Árabe"}>Árabe</option>
                <option value={"Saudável"}>Saudável</option>
                <option value={"Vegana"}>Vegana</option>
                <option value={"Doces"}>Doces</option>
              </Select>
            </FormControl>
            <h5
              style={{
                textTransform: "uppercase",
                color: "#9E5642",
                marginBottom: "2vh",
                marginTop: "2vh",
              }}
            >
              Edite seu tempo de experiência:
            </h5>
            <FormControl fullWidth style={{ marginTop: 20, marginBottom: 20 }}>
              <InputLabel htmlFor="outlined-age-native-simple">
                Experiência
              </InputLabel>
              <Select
                native
                value={options.experience}
                onChange={changeEspeciality}
                label="Experiência"
                inputProps={{
                  name: "experience",
                }}
              >
                <option aria-label="None" value="" />
                <option value={" 0 - 2 anos"}>0-2 anos</option>
                <option value={"2 - 4 anos"}>2-4 anos</option>
                <option value={"4 - 6 anos"}>4-6 anos</option>
                <option value={"Mais de 8 anos"}>+8 anos</option>
              </Select>
            </FormControl>
            <h5
              style={{
                textTransform: "uppercase",
                color: "#9E5642",
                marginBottom: "2vh",
                marginTop: "2vh",
              }}
            >
              Valor médio por pessoa (R$)
            </h5>
            <CssTextArea
              inputRef={register}
              name="price"
              type="number"
              inputProps={{ max: 100 }}
              max="100"
              label="R$"
              fullWidth
              style={{ marginTop: 20 }}
            />
            <h5
              style={{
                textTransform: "uppercase",
                color: "#9E5642",
                marginBottom: "2vh",
                marginTop: "2vh",
              }}
            >
              Biografia:
            </h5>
            <CssTextArea
              inputRef={register}
              name="bio"
              multiline
              fullWidth
              rows={6}
              style={{ marginTop: 20 }}
            />
          </>
        )}
        <div className="ConfigsBox">
          <h2
            style={{
              textTransform: "uppercase",
              color: "#9E5642",
              marginBottom: "2vh",
              marginTop: "2vh",
            }}
          >
            Deseja salvar as alterações?
          </h2>
          <div className="ButtonsConfigs">
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              style={{
                textTransform: "uppercase",
                color: "#9E5642",
                marginBottom: "2vh",
                marginTop: "2vh",
              }}
            >
              Sim
            </Button>
            <Button
              onClick={() =>
                userData.isChef
                  ? history.push("/home-chef")
                  : history.push("/home-customer")
              }
              variant="outlined"
              color="secondary"
              style={{
                textTransform: "uppercase",
                color: "#9E5642",
                marginBottom: "2vh",
                marginTop: "2vh",
              }}
            >
              Não
            </Button>
          </div>
        </div>
      </form>
      <p style={{ fontSize: "x-small", color: "red", alignSelf: "center" }}>
        {errors.name?.message || errors.email?.message || errors.bio?.message}
      </p>
      <Snackbar
        open={positiveFeedback}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Perfil atualizado com sucesso!
        </Alert>
      </Snackbar>
    </div>
  );
};
