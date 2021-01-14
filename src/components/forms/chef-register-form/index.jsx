import React, { useState, useEffect } from "react";
import { Button, TextField, FormControl, InputLabel, Select } from "@material-ui/core"
import "./index.css";
import {
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';
import logo from "../../../images/logo/logo.png";
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
        width: "94%",

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
    const classes = useStyles();
    const [chefRegister, setChefRegister] = useState(false)
    const [options, setOption] = useState({ especiality: '', experienceTime: '' })
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
        setOption({ especiality: '', experienceTime: '' })
    }, [chefRegister])

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
                <form style={!chefRegister ? {position: "relative", top: 50, display: "flex", flexDirection: "column", alignItems: "center", transition: "1s"} : {position: "relative", top: -20, display: "flex", flexDirection: "column", alignItems: "center", transition: "1s"}}>

                    <CssTextField
                        className={classes.margin}
                        label="NOME"
                        variant="outlined"
                        id="custom-css-outlined-input"
                        margin="dense"
                        style={{background: "white", borderRadius: "5px"}}
                    />
                    <CssTextField
                        className={classes.margin}
                        label="E-MAIL"
                        variant="outlined"
                        id="custom-css-outlined-input"
                        margin="dense"
                        style={{background: "white", borderRadius: "5px"}}
                    />
                    <CssTextField
                        className={classes.margin}
                        label="DATA DE NASCIMENTO"
                        variant="outlined"
                        id="custom-css-outlined-input"
                        margin="dense"
                        style={{background: "white", borderRadius: "5px"}}
                    />
                    <CssTextField
                        className={classes.margin}
                        label="SENHA"
                        variant="outlined"
                        id="custom-css-outlined-input"
                        margin="dense"
                        style={{background: "white", borderRadius: "5px"}}
                    />
                    <FormControl variant="outlined" className={classes.formControl}
                                 style={!chefRegister ? {background: "white", borderRadius: "5px", opacity: 0, transition: "1s", position: "relative", bottom: -10} : {background: "white", borderRadius: "5px", opacity: 1, transition: "1s", position: "relative", bottom: 0}}
                    >
                        <InputLabel
                            htmlFor="outlined-age-native-simple"

                        >Especialidade</InputLabel>
                        <Select
                            native
                            value={options.especiality}
                            onChange={changeEspeciality}
                            label="Especialidade"
                            inputProps={{
                                name: 'especiality',
                                id: 'outlined-age-native-simple',
                            }}
                            disabled={!chefRegister}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
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
                            value={options.experienceTime}
                            onChange={changeExperienceTime}
                            label="Tempo de Experiência"
                            inputProps={{
                                name: 'experienceTime',
                                id: 'outlined-age-native-simple',
                            }}
                            disabled={!chefRegister}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
                    <div style={!chefRegister ? {display: "flex", justifyContent: "space-between", width: "100%", transition: "1s", position: "relative", bottom: 130} : {display: "flex", justifyContent: "space-between", width: "100%", transition: "1s", position: "relative", bottom: 0}}>
                        <ColorButton style={{fontWeight: 700, fontSize: 11}}>cadastrar</ColorButton>
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
