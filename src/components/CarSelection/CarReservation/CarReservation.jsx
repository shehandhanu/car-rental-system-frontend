import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";

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
  text: {
    height: 20,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  detailsbody: {
    margin: "20px",
  },
  carddetails: {
    height: 382,
  },
}));

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
];

const UserReport = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container component="main" className={classes.root}>
        <Grid item xs={false} sm={4} md={9}>
          <div container className={classes.detailsbody}>
            <Container maxWidth="md" component="main">
              <Grid container spacing={3} alignItems="flex-end">
                <Grid item md={8}>
                  <Card>
                    <CardHeader
                      title="Hyhonda"
                      titleTypographyProps={{ align: "center" }}
                      subheaderTypographyProps={{ align: "center" }}
                      className={classes.cardHeader}
                    />
                    <CardContent>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://res.cloudinary.com/dxz8wbaqv/image/upload/v1629518812/afproject/SPM%20Project/bavdbbnata8yrgjsuiix.jpg"
                        title="Image title"
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={4}>
                  <Card>
                    <CardContent>
                      <CardContent className={classes.carddetails}>
                        <div className={classes.cardPricing}>
                          <Typography variant="h6" color="textSecondary">
                            Car Details
                          </Typography>
                        </div>
                        <ul>
                          {tiers[0].description.map((line) => (
                            <Typography
                              component="li"
                              variant="subtitle1"
                              align="center"
                              key={line}
                            >
                              {line}
                            </Typography>
                          ))}
                        </ul>
                      </CardContent>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={12}>
                  <Card>
                    <CardContent>
                      <CardContent>
                        <div className={classes.cardPricing}>
                          <Typography variant="h6" color="textSecondary">
                            Other Details
                          </Typography>
                        </div>
                        <ul>
                          {tiers[0].description.map((line) => (
                            <Typography
                              component="li"
                              variant="subtitle1"
                              align="center"
                              key={line}
                            >
                              {line}
                            </Typography>
                          ))}
                        </ul>
                      </CardContent>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </div>
        </Grid>
        <Grid item xs={12} sm={8} md={3} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Check Availability
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                type="date"
                className={classes.text}
                // label="Email Address"
                name="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                // label="Password"
                type="date"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ backgroundColor: "#bd9400" }}
                className={classes.submit}
              >
                Check Vehical
              </Button>

              <Container maxWidth="sm" component="main">
                <Typography
                  component="h1"
                  variant="h6"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  Pricing
                </Typography>
                <Typography
                  variant="h7"
                  align="center"
                  color="textSecondary"
                  component="p"
                >
                  Quickly build an effective pricing table for your potential
                  customers with this layout. It&apos;s built with default
                  Material-UI components with little customization.
                </Typography>
              </Container>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ backgroundColor: "#bd9400" }}
                className={classes.submit}
              >
                Book Now
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserReport;
