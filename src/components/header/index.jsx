import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: "#f5e0cc",
    boxShadow: "none",
  },
  logo: {
    width: "3em",
    marginRight: "12vw",
  },
  loginButton: {
    marginLeft: "2vw",
    marginRight: "2vw",
  },
  title: {
    flexGrow: 1,
    textTransform: "uppercase",
    fontWeight: "bolder",
    letterSpacing: -2,
  },
  categoriesToolbar: {
    flexGrow: 1,
  },
  toolbarButton: {
    width: "25%",
  },
}));

const Header = () => {
  const classes = useStyles();
  const actualWidth = window.innerWidth;
  let user = JSON.parse(localStorage.getItem("userData"));
  const [colapsed, setColapsed] = useState(true);

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
  };

  const handleColapse = () => {
    setColapsed(!colapsed);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="Logo Principal"
            className={classes.logo}
          />
          {actualWidth > 425 && (
            <Typography color="primary" variant="h5" className={classes.title}>
              Deixa que eu faço
            </Typography>
          )}
          {!user && (
            <Button
              color="secondary"
              component={Link}
              to="/register"
              className={classes.link}
            >
              Cadastre-se
            </Button>
          )}
          {!user && (
            <Button
              color="primary"
              component={Link}
              to="/login"
              className={classes.loginButton}
            >
              Login
            </Button>
          )}
          {user && (
            <Button
              color="secondary"
              className={classes.link}
              onClick={handleColapse}
            >
              Categorias
            </Button>
          )}
          {user && (
            <Button
              color="primary"
              component={Link}
              to="/"
              className={classes.loginButton}
              onClick={logout}
            >
              Logout
            </Button>
          )}
        </Toolbar>
        {user && !colapsed && (
          <Toolbar className={classes.categoriesToolbar}>
            <Button className={classes.toolbarButton} color="secondary">
              Churrasco
            </Button>
            <Button className={classes.toolbarButton} color="secondary">
              Japonesa
            </Button>
            <Button className={classes.toolbarButton} color="secondary">
              Chinesa
            </Button>
            <Button className={classes.toolbarButton} color="secondary">
              Vegetariana
            </Button>
          </Toolbar>
        )}
        {user && !colapsed && (
          <Toolbar className={classes.categoriesToolbar}>
            <Button className={classes.toolbarButton} color="secondary">
              Árabe
            </Button>
            <Button className={classes.toolbarButton} color="secondary">
              Saúdavel
            </Button>
            <Button className={classes.toolbarButton} color="secondary">
              Vegana
            </Button>
            <Button className={classes.toolbarButton} color="secondary">
              Doces
            </Button>
          </Toolbar>
        )}
      </AppBar>
    </div>
  );
};

export default Header;
