import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper: {
    margin: "0 auto",
  },
}));

const ServiceCard = ({ service }) => {
  const classes = useStyles();
  console.log(service);
  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <p>{service.status}</p>
      </Paper>
    </div>
  );
};

export default ServiceCard;
