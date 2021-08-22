import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function OwnerRegistration() {
  const INITIAL_VALUES = {
    ownerFirstName: null,
    ownerLastName: null,
    ownerNIC: null,
    ownerEmail: null,
    ownerContact: null,
    ownerAddress: null,
    vehicleNumbers: null,
  };

  const [values, setValues] = React.useState(INITIAL_VALUES);

  console.log("values", values);

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Vehicle Owner Registration
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                // autoComplete="fname"
                // name="firstName"
                variant="outlined"
                required
                fullWidth
                // id="firstName"
                label="First Name"
                autoFocus
                value={values.ownerFirstName}
                onChange={(e) =>
                  setValues({ ...values, ownerFirstName: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                // id="lastName"
                label="Last Name"
                // name="lastName"
                // autoComplete="lname"
                value={values.ownerLastName}
                onChange={(e) =>
                  setValues({ ...values, ownerLastName: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                // id="email"
                label="NIC"
                // name="email"
                // autoComplete="email"
                value={values.ownerNIC}
                onChange={(e) =>
                  setValues({ ...values, ownerNIC: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                // id="email"
                label="Email Address"
                // name="email"
                // autoComplete="email"
                value={values.ownerEmail}
                onChange={(e) =>
                  setValues({ ...values, ownerEmail: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                // id="email"
                label="Address"
                // name="email"
                // autoComplete="email"
                value={values.ownerAddress}
                onChange={(e) =>
                  setValues({ ...values, ownerAddress: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                // id="email"
                label="Contact Number"
                // name="email"
                // autoComplete="email"
                value={values.ownerContact}
                onChange={(e) =>
                  setValues({ ...values, ownerContact: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                style={{ paddingBottom: 20 }}
                // id="outlined-multiline-static"
                label="Vehicle Numbers"
                multiline
                rows={4}
                fullWidth
                variant="outlined"
                value={values.vehicleNumbers}
                onChange={(e) =>
                  setValues({ ...values, vehicleNumbers: e.target.value })
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            style={{ height: 50 }}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register User
          </Button>
        </form>
      </div>
    </Container>
  );
}
