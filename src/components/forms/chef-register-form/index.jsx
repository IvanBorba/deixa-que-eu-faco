import React, { useState, useEffect } from "react";
import { Button, TextField, FormControl, InputLabel, Select } from "@material-ui/core"
import "./index.css";
import {
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';
import logo from "../../../images/logo/logo.png";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

// import registerImage from "../../../images/register/registerImage.jpg";

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#9E5642',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#9E5642',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#9E5642',
            },
            '&:hover fieldset': {
                borderColor: '#9E5642',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#9E5642',
            },
        },
    },
})(TextField);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    formControl: {
        margin: 8,
        width: "100%",

    },
}));

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText('#9E5642'),
        backgroundColor: '#9E5642',
        '&:hover': {
            backgroundColor: '#9E5642',
        },
        margin: 8,
    },
}))(Button);

const RegisterForm = () => {
    const history = useHistory();
    const classes = useStyles();
    const [chefRegister, setChefRegister] = useState(false)
    const [options, setOption] = useState({ expertise: '', experience: '' })

    const changeEspeciality = (event) => {
        const name = event.target.name;
        setOption({
            ...options,
            [name]: event.target.value,
        });
    };
    const changeExperienceTime = (event) => {
        const name = event.target.name;
        setOption({
            ...options,
            [name]: event.target.value,
        });
    };

    useEffect(() => {
        setOption({ expertise: '', experience: '' })
    }, [chefRegister])

    const registerPost = (data) => {
        if (chefRegister) {
            data.expertise = options.expertise
            data.experience = options.experience
            data.isChef = chefRegister
        } else {
            data.isChef = chefRegister
        }
        console.log(data)
        axios.post("https://api-deixa-que-eu-faco.herokuapp.com/register", data)
            .then(() => {
                history.push("/login")
            })
    }

    const registerSchema = yup.object().shape({
        email: yup
            .string("O formato do e-mail é inválido")
            .email("O formato do e-mail é inválido")
            .required("Por Favor, informe o e-mail"),
        password: yup
            .string("O formato da senha é inválido")
            .min(6, "A Senha deve ter pelo menos 6 caracteres"),
        name: yup
            .string("O formato do nome é inválido")
            .matches(
                /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi,
                "Seu nome e sobrenome devem conter apenas letras"
            )
            .required("Por favor, informe seu nome"),
        birth_date: yup
            .string("O formato da bio é inválido")
            .required("Precisamos da sua data de nascimento!"),
    });

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(registerSchema),
    });

    return (
        <div className="registerBox">
            {/*<img alt="carregando" src={registerImage} style={{position: "absolute", zIndex: -1, opacity: 0.5, backgroundAttachment: "fixed"}} />*/}
            <div className="topButtons" >
                    <Button style={{color: "#9E5642"}}>VOLTAR</Button>
                    <Button style={{color: "#9E5642"}}>LOGIN</Button>
            </div>
            <div className={!chefRegister ? "theForm" : "theFormChef"}>
                <img alt="carregando" src={logo} className={!chefRegister ? "registerLogo" : "registerLogoChef"}/>
                <span style={!chefRegister ? {position: "relative", top: 25, color: "#9E5642", transition: "1s"} : {position: "relative", top: -30, color: "#9E5642", transition: "1s"}}>CADASTRE-SE COMO {!chefRegister ? "CLIENTE" : "CHEFE"}</span>
                <form
                    onSubmit={handleSubmit(registerPost)}
                    style={!chefRegister ? {position: "relative", top: 50, display: "flex", flexDirection: "column", alignItems: "center", transition: "1s"} : {position: "relative", top: -20, display: "flex", flexDirection: "column", alignItems: "center", transition: "1s"}}
                >

                    <CssTextField
                        className={classes.margin}
                        name="name"
                        label="NOME"
                        variant="outlined"
                        id="custom-css-outlined-input"
                        margin="dense"
                        style={{background: "white", borderRadius: "5px"}}
                        inputRef={register}
                        error={!!errors.name}
                        fullWidth
                    />
                    <CssTextField
                        className={classes.margin}
                        name="email"
                        label="E-MAIL"
                        variant="outlined"
                        id="custom-css-outlined-input"
                        margin="dense"
                        style={{background: "white", borderRadius: "5px"}}
                        inputRef={register}
                        error={!!errors.email}
                        fullWidth
                    />
                    <CssTextField
                        className={classes.margin}
                        type="date"
                        name="birth_date"
                        label=""
                        variant="outlined"
                        id="custom-css-outlined-input"
                        margin="dense"
                        style={{background: "white", borderRadius: "5px"}}
                        inputRef={register}
                        error={!!errors.brith_date}
                        fullWidth
                    />
                    <CssTextField
                        className={classes.margin}
                        name="password"
                        label="SENHA"
                        variant="outlined"
                        type="password"
                        id="custom-css-outlined-input"
                        margin="dense"
                        style={{background: "white", borderRadius: "5px"}}
                        inputRef={register}
                        error={!!errors.password}
                        fullWidth
                    />
                    <FormControl variant="outlined" className={classes.formControl}
                                 style={!chefRegister ? {background: "white", borderRadius: "5px", opacity: 0, transition: "1s", position: "relative", bottom: -10} : {background: "white", borderRadius: "5px", opacity: 1, transition: "1s", position: "relative", bottom: 0}}
                    >
                        <InputLabel
                            htmlFor="outlined-age-native-simple"

                        >Especialidade</InputLabel>
                        <Select
                            native
                            value={options.expertise}
                            onChange={changeEspeciality}
                            label="Especialidade"
                            inputProps={{
                                name: 'expertise',
                                id: 'outlined-age-native-simple',
                            }}
                            disabled={!chefRegister}
                        >
                            <option aria-label="None" value="" />
                            <option value={"Churrasco"}>Churrasco</option>
                            <option value={"Sushi"}>Sushi</option>
                            <option value={"Vegano"}>Vegano</option>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}
                                 style={!chefRegister ? {background: "white", borderRadius: "5px", opacity: 0, transition: "1s", position: "relative", bottom: -100} : {background: "white", borderRadius: "5px", opacity: 1, transition: "1s", position: "relative", bottom: 0}}
                    >
                        <InputLabel
                            htmlFor="outlined-age-native-simple"

                        >Tempo de Experiência</InputLabel>
                        <Select
                            native
                            value={options.experience}
                            onChange={changeExperienceTime}
                            label="Tempo de Experiência"
                            inputProps={{
                                name: 'experience',
                                id: 'outlined-age-native-simple',
                            }}
                            disabled={!chefRegister}
                        >
                            <option aria-label="None" value="" />
                            <option value={"0-3 anos"}>0-3 anos</option>
                            <option value={"3-8 anos"}>3-8 anos</option>
                            <option value={"+8 anos"}>+8 anos</option>
                        </Select>
                    </FormControl>
                    <div style={!chefRegister ? {display: "flex", justifyContent: "space-between", width: "100%", transition: "1s", position: "relative", bottom: 130} : {display: "flex", justifyContent: "space-between", width: "100%", transition: "1s", position: "relative", bottom: 0}}>
                        <ColorButton type="submit" style={{fontWeight: 700, fontSize: 11}}>cadastrar</ColorButton>
                        <ColorButton style={{fontWeight: 700, fontSize: 11}} onClick={() => setChefRegister(!chefRegister)}>{!chefRegister ? "SOU CHEF" : "SOU CLIENTE"}</ColorButton>
                    </div>
                </form>
            </div>

            <div className="registerFooter">
                <span>DEIXA QUE EU FAÇO</span>
                <span>© Todos os direitos reservados.</span>
            </div>
        </div>
    )
};

export default RegisterForm
