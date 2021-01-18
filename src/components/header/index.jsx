import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: "#D6B8B0",
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
    backgroundColor: "#F5E0CC",
  },
  toolbarButton: {
    width: "25%",
  },
  toolbarButtonMobile: {
    width: "25%",
    fontSize: "11px",
  },
  categories: {
    borderRadius: 0,
    height: "10vh",
    margin: 0,
    width: "25%",
    [theme.breakpoints.down(450)]: { width: "33%" },
    [theme.breakpoints.down(400)]: { width: "40%" },
    [theme.breakpoints.down(330)]: { width: "55%" },
  },
}));

const Header = () => {
  const classes = useStyles();
  const actualWidth = window.innerWidth;
  let user = JSON.parse(localStorage.getItem("userData"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [colapsed, setColapsed] = useState(true);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    history.push("/");
    window.location.reload();
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
            <Button color="secondary" component={Link} to="/register">
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
              color={colapsed ? "primary" : "secondary"}
              className={classes.categories}
              style={
                colapsed
                  ? { backgroundColor: "#D6B8B0" }
                  : { backgroundColor: "#F5E0CC" }
              }
              onClick={handleColapse}
            >
              Categorias{" "}
              {colapsed ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </Button>
          )}
          {user && actualWidth > 425 && (
            <Button
              color="primary"
              component={Link}
              to="/settings"
              className={classes.loginButton}
            >
              Minha conta
            </Button>
          )}
          {user && actualWidth > 425 && (
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
          {user && actualWidth <= 425 && (
            <>
              <IconButton
                edge="start"
                color="primary"
                aria-label="menu"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
              >
                <MenuItem onClick={() => setAnchorEl(null)}>Fechar</MenuItem>
                <MenuItem onClick={() => history.push("/settings")}>
                  Minha conta
                </MenuItem>
                <MenuItem onClick={logout}>Logoff</MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
        {user && !colapsed && (
          <Toolbar className={classes.categoriesToolbar}>
            <Button
              className={
                actualWidth > 425
                  ? classes.toolbarButton
                  : classes.toolbarButtonMobile
              }
              color="secondary"
            >
              Churrasco
            </Button>
            <Button
              className={
                actualWidth > 425
                  ? classes.toolbarButton
                  : classes.toolbarButtonMobile
              }
              color="secondary"
            >
              Japonesa
            </Button>
            <Button
              className={
                actualWidth > 425
                  ? classes.toolbarButton
                  : classes.toolbarButtonMobile
              }
              color="secondary"
            >
              Chinesa
            </Button>
            <Button
              className={
                actualWidth > 425
                  ? classes.toolbarButton
                  : classes.toolbarButtonMobile
              }
              color="secondary"
            >
              Vegetariana
            </Button>
          </Toolbar>
        )}
        {user && !colapsed && (
          <Toolbar className={classes.categoriesToolbar}>
            <Button
              className={
                actualWidth > 425
                  ? classes.toolbarButton
                  : classes.toolbarButtonMobile
              }
              color="secondary"
            >
              Árabe
            </Button>
            <Button
              className={
                actualWidth > 425
                  ? classes.toolbarButton
                  : classes.toolbarButtonMobile
              }
              color="secondary"
            >
              Saúdavel
            </Button>
            <Button
              className={
                actualWidth > 425
                  ? classes.toolbarButton
                  : classes.toolbarButtonMobile
              }
              color="secondary"
            >
              Vegana
            </Button>
            <Button
              className={
                actualWidth > 425
                  ? classes.toolbarButton
                  : classes.toolbarButtonMobile
              }
              color="secondary"
            >
              Doces
            </Button>
          </Toolbar>
        )}
      </AppBar>
    </div>
  );
};

export default Header;
