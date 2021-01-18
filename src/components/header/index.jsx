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
    marginRight: "2vw",
  },
  loginButton: {
    marginLeft: "2vw",
    marginRight: "2vw",
    [theme.breakpoints.down(281)]: { marginLeft: 0 },
  },
  title: {
    marginLeft: 0,
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
    [theme.breakpoints.down(281)]: { fontSize: "9px" },
  },
  mobileButton: {
    marginLeft: "16vw",
    [theme.breakpoints.down(769)]: { marginLeft: "38vw" },
    [theme.breakpoints.down(426)]: { marginLeft: "26vw" },
    [theme.breakpoints.down(425)]: { marginLeft: "15vw" },
  },
  categories: {
    borderRadius: 0,
    height: "10vh",
    margin: 0,
    width: "25%",
    [theme.breakpoints.down(450)]: { width: "33%" },
    [theme.breakpoints.down(400)]: { width: "40%" },
    [theme.breakpoints.down(330)]: { width: "55%", fontSize: "11px" },
  },
}));

const Header = () => {
  const classes = useStyles();
  const actualWidth = window.innerWidth;
  let user = JSON.parse(localStorage.getItem("userData"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [colapsed, setColapsed] = useState(true);
  const history = useHistory();
  const categories1 = ["Churrasco", "Japonesa", "Chinesa", "Vegetariana"];
  const categories2 = ["Árabe", "Saudável", "Vegana", "Doces"];

  const handleCategoriesRedirect = (categorie) => {
    history.push(`/chefs/${categorie}`);
  };

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
          {actualWidth > 768 && (
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
          {user && actualWidth > 768 && (
            <Button
              color="primary"
              component={Link}
              to="/settings"
              className={classes.loginButton}
            >
              Minha conta
            </Button>
          )}
          {user && actualWidth > 768 && (
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
          {user && actualWidth <= 768 && (
            <>
              <IconButton
                edge="start"
                color="primary"
                aria-label="menu"
                onClick={handleClick}
                className={classes.mobileButton}
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
            {categories1.map((actual, index) => {
              return (
                <Button
                  key={index}
                  className={
                    actualWidth > 425
                      ? classes.toolbarButton
                      : classes.toolbarButtonMobile
                  }
                  color="secondary"
                  onClick={() => handleCategoriesRedirect(actual)}
                >
                  {actual}
                </Button>
              );
            })}
          </Toolbar>
        )}
        {user && !colapsed && (
          <Toolbar className={classes.categoriesToolbar}>
            {categories2.map((actual, index) => {
              return (
                <Button
                  key={index}
                  className={
                    actualWidth > 425
                      ? classes.toolbarButton
                      : classes.toolbarButtonMobile
                  }
                  color="secondary"
                  onClick={() => handleCategoriesRedirect(actual)}
                >
                  {actual}
                </Button>
              );
            })}
          </Toolbar>
        )}
      </AppBar>
    </div>
  );
};

export default Header;
