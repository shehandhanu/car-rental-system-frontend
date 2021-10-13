import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import AddressInput from "material-ui-address-input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import { SettingsInputCompositeTwoTone } from "@material-ui/icons";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://res.cloudinary.com/dxz8wbaqv/image/upload/v1631639062/SPM%20Project/Tharaka/s-migaj-b2qszO9C7sw-unsplash_qvuxks.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    width: "500px !important",
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  const [emName, setEmName] = React.useState("");
  const [noOfDates, setNoOfDates] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [reason, setReason] = React.useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      emName: emName,
      noOfDates: noOfDates,
      startDate: startDate,
      endDate: endDate,
      email: email,
      reason: reason,
    };

    const datax = await axios.post(
      "https://car-rentalsystem-backend.herokuapp.com/api/v1/leaves/applyleaves",
      data
    );
    console.log(datax);
    setEmName("");
    setNoOfDates("");
    setStartDate("");
    setEndDate("");
    setEmail("");
    setReason("");
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Apply For Leaves
          </Typography>
          <form className={classes.form} onSubmit={onSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              value={emName}
              onChange={(e) => setEmName(e.target.value)}
              id="FName"
              label="Employee Name"
              name="FName"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              value={noOfDates}
              onChange={(e) => setNoOfDates(e.target.value)}
              id="NoOfDates"
              label="Number Of Dates"
              name="NoOfDates"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              id="startDate"
              label="Starting From"
              name="startDate"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              id="endDate"
              label="To"
              name="endDate"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              id="reason"
              label="Reason"
              name="reason"
              autoFocus
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
