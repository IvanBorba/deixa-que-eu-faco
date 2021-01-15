import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: "#f5e0cc",
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
}));

const Header = () => {
  const classes = useStyles();
  const actualWidth = window.innerWidth;

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
          <Button
            color="secondary"
            component={Link}
            to="/register"
            className={classes.link}
          >
            Cadastre-se
          </Button>
          <Button
            color="primary"
            component={Link}
            to="/login"
            className={classes.loginButton}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
