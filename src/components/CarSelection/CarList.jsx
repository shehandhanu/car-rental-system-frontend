import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#bd9400",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const UserReport = () => {
  const classes = useStyles();
  const [vehicals, setvehicals] = React.useState();

  const [type, settype] = React.useState();

  React.useEffect(() => {
    async function getData() {
      const data = await axios.get(
        "http://localhost:4000/api/v1/vehical/getvehicals"
      );
      setvehicals(data.data.vehical);
      console.log(vehicals);
    }

    getData();
  }, [!vehicals, type]);
  return (
    <div>
      <Grid container component="main" className={classes.root}>
        <Grid item xs={12} sm={8} md={3} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Box mt={12}> </Box>
            <Typography component="h1" variant="h5">
              Search Vehicals
            </Typography>
            <form className={classes.form} noValidate>
              <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="age-native-label-placeholder">
                  Vehical Types
                </InputLabel>
                <NativeSelect
                  style={{ width: 260 }}
                  fullWidth
                  value={type}
                  onChange={(e) => settype(e.target.value)}
                >
                  <option value={"None"}>None</option>
                  <option value={"Van"}>Van</option>
                  <option value={"Car"}>Car</option>
                  <option value={"Wedding"}>Wedding</option>
                  <option value={"Bike"}>Bike</option>
                  <option value={"Scooter"}>Scooter</option>
                  <option value={"Luxury"}>Luxury</option>
                </NativeSelect>
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ backgroundColor: "#bd9400" }}
                className={classes.submit}
              >
                Search Vehicals
              </Button>
            </form>
          </div>
        </Grid>
        <Grid item xs={false} sm={4} md={9}>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {vehicals &&
                vehicals.map((card) => (
                  // <div>
                  //   {type === card.vehicleType || type === "None" ? (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://res.cloudinary.com/dxz8wbaqv/image/upload/v1629518812/afproject/SPM%20Project/bavdbbnata8yrgjsuiix.jpg"
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {card.vehicleName} {card.manufactureYear}
                        </Typography>
                        <Typography>
                          {card.vehicleCategory} {card.specification}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Link
                          style={{ textDecoration: "none" }}
                          to={{ pathname: "/carcheckout", state: card }}
                        >
                          <Button size="small" color="primary">
                            View
                          </Button>
                        </Link>
                      </CardActions>
                    </Card>
                  </Grid>
                  //   ) : null}
                  // </div>
                ))}
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserReport;

function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main></main>
    </React.Fragment>
  );
}
