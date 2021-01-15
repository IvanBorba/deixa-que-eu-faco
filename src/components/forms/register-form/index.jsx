import React, {useEffect, useState} from "react";
import {Button, FormControl, InputLabel, Select, TextField} from "@material-ui/core";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../../helper";
import { RegisterPost } from "../../../requisitions/register";

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


const RegisterForm = ({ chefRegister, setChefRegister }) => {
    const classes = useStyles()
    const [options, setOption] = useState({
            expertise: '',
            experience: ''
        })
    const changeEspeciality = (event) => {
        const name = event.target.name;
        setOption({
            ...options,
            [name]: event.target.value,
        });
    }
    const changeExperienceTime = (event) => {
        const name = event.target.name;
        setOption({
            ...options,
            [name]: event.target.value,
        });
    };

    useEffect(() => {
        setOption({ expertise: '', experience: '' })
    }, [chefRegister]);

    const registerRequisition = (data) => {
        RegisterPost(data, chefRegister, options)
    };

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(registerSchema),
    });
    
    return (
        <form
            onSubmit={handleSubmit(registerRequisition)}
            style={!chefRegister ? {position: "relative", top: 50, display: "flex", flexDirection: "column", alignItems: "center", transition: "1s"} : {position: "relative", top: -20, display: "flex", flexDirection: "column", alignItems: "center", transition: "1s"}}
        >

            <CssTextField
                className={classes.margin}
                name="name"
                label="NOME"
                variant="outlined"
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
    )
}

export default RegisterForm;
