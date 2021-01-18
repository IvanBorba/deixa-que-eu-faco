import React from "react";
import TextField from "@material-ui/core/TextField";
import { LoginRequisition } from "../../../requisitions";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const users = useSelector((state) => state.users);
  const history = useHistory();

  const handleLogin = (data) => {
    LoginRequisition(data, users, history);
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
  );
};

export default LoginForm;
