import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function Checkout() {
  const location = useLocation();

  const classes = useStyles();
  const history = useHistory();

  let word = location.pathname.toString();

  const id = word.slice(-24);

  console.log(id);

  const [cardNumber, setcardNumber] = React.useState();
  const [cardOwnerName, setcardOwnerName] = React.useState();
  const [expireDate, setexpireDate] = React.useState();
  const [cvv, setcvv] = React.useState();

  const handleSubmit = async (e) => {
    console.log("works");
    e.preventDefault();
    const data = {
      cardNumber: cardNumber,
      cardOwnerName: cardOwnerName,
      expireDate: expireDate,
      cvv: cvv,
    };

    console.log(data);

    const user = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}reservation/addpaymentdetails/${id}`,
      data
    );
    if (user.status === 200) {
      alert("Payment SuccessFul..!");
    }
    history.push("/");
  };

  return (
    <React.Fragment>
      <main
        className={classes.layout}
        style={{ marginBottom: "1355px", marginTop: "100px" }}
      >
        <Paper className={classes.paper}>
          <Typography
            style={{ marginBottom: "25px" }}
            component="h1"
            variant="h4"
            align="center"
          >
            Payment Form
          </Typography>

          <React.Fragment>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  value={cardNumber}
                  onChange={(e) => setcardNumber(e.target.value)}
                  required
                  id="cardName"
                  label="Name on card"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  value={cardOwnerName}
                  onChange={(e) => setcardOwnerName(e.target.value)}
                  required
                  id="cardNumber"
                  label="Card number"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  type="date"
                  value={expireDate}
                  onChange={(e) => setexpireDate(e.target.value)}
                  required
                  id="expDate"
                  label="Expiry date"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  style={{ marginTop: "15px" }}
                  value={cvv}
                  onChange={(e) => setcvv(e.target.value)}
                  required
                  id="cvv"
                  label="CVV"
                  fullWidth
                />
              </Grid>
            </Grid>
          </React.Fragment>

          <React.Fragment>
            <React.Fragment></React.Fragment>
            <React.Fragment>
              <div className={classes.buttons}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => handleSubmit(e)}
                  className={classes.button}
                >
                  Process Payment
                </Button>
              </div>
            </React.Fragment>
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
