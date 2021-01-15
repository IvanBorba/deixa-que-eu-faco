import React from "react";
import TextField from "@material-ui/core/TextField";
import { LoginRequisition } from "../../../requisitions";
import { useForm } from "react-hook-form";

const LoginForm = () => {
    const { register, handleSubmit } = useForm();

    const handleLogin = (data) => {
        console.log("Data: ", data);
        LoginRequisition(data)
    };

    return (
        <form onSubmit={handleSubmit(handleLogin)}>
            <TextField
                required
                label="Email"
                variant="outlined"
                className="input"
                name="email"
                inputRef={register}
            />
            <TextField
                required
                label="Password"
                variant="outlined"
                className="input"
                name="password"
                inputRef={register}
            />
            <button type="submit">ENTRAR</button>
        </form>
    )
}

export default LoginForm;
