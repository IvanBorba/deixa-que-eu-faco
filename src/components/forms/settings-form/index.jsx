import React, {useState} from "react";
import { withStyles } from "@material-ui/core/styles";
import {FormControl, InputLabel, Select, TextField} from "@material-ui/core";
import "./index.css";

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

export const SettingsAvatar = ({ firstLetter, profilePhoto }) => {
    return (
        <div className="avatarBox">
            <div className="theAvatar">
                {profilePhoto ?<img  alt="profilePhoto" src={profilePhoto} /> : firstLetter }
            </div>
            <h3 style={{fontWeight: "lighter"}}>ALTERAR AVATAR</h3>
            <CssTextField
                name="name"
                label="CHOSE FILE..."
                variant="outlined"
                margin="dense"
            />
        </div>
    );
};

export const SettingsDatas = () => {
    const isChef = JSON.parse(localStorage.getItem("userData")).isChef
    console.log(isChef)
    const [options, setOption] = useState({
        expertise: "",
        experience: "",
    });

    const changeEspeciality = (event) => {
        const name = event.target.name;
        setOption({
            ...options,
            [name]: event.target.value,
        });
    };
    return (
        <div className="dataBox">
            <div className="dataSettingsBox">
                <h3 style={{fontWeight: "lighter"}}>ATUALIZE SEUS DADOS</h3>
                <h5>EDITE SEU NOME:</h5>
                <CssTextField
                    name="name"
                    label=""
                    variant="outlined"
                    margin="dense"
                    fullWidth
                />
                <h5>EDITE SEU TEMPO DE EXPERIÊNCIA:</h5>
                <CssTextField
                    name="name"
                    label=""
                    variant="outlined"
                    margin="dense"
                    fullWidth
                />
                <h5>EDITE SUA DATA DE NASCIMENTO:</h5>
                <CssTextField
                    name="name"
                    label=""
                    variant="outlined"
                    margin="dense"
                    type="date"
                    fullWidth
                />
                <h5 style={{marginTop: 10}}>EDITE SUA ESPECIALIDADE:</h5>
                <FormControl
                    variant="outlined"
                    fullWidth
                    style={{marginTop: 20, marginBottom: 20}}
                >
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
                <h5>EDITE SEU TEMPO DE EXPERIÊNCIA:</h5>
                <FormControl
                    variant="outlined"
                    fullWidth
                    style={{marginTop: 20, marginBottom: 20}}
                >
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
                        <option value={" 0 - 2 anos"}>0-3 anos</option>
                        <option value={"2 - 4 anos"}>2-4 anos</option>
                        <option value={"4 - 6 anos"}>4-6 anos</option>
                        <option value={"Mais de 8 anos"}>+8 anos</option>
                    </Select>
                </FormControl>
                <h5>BIOGRAFIA:</h5>
                <CssTextArea
                    variant="outlined"
                    multiline
                    fullWidth
                    rows={6}
                    style={{marginTop: 20}}
                />
            </div>
        </div>

    )
}

export const LoginSettings = () => {
    return (
        <div className="loginSettingsBox">
            <div className="loginSettingsForm">
                <h3>ATUALIZE SUA SENHA</h3>
                <h5>SENHA ATUAL:</h5>
                <CssTextField
                    name="name"
                    label=""
                    variant="outlined"
                    margin="dense"
                    fullWidth
                />
                <h5>NOVA SENHA:</h5>
                <CssTextField
                    name="name"
                    label=""
                    variant="outlined"
                    margin="dense"
                    fullWidth
                />
                <h5>CONFIRMAR SENHA:</h5>
                <CssTextField
                    name="name"
                    label=""
                    variant="outlined"
                    margin="dense"
                    fullWidth
                />
            </div>
        </div>
    )
}

