import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { useHistory } from "react-router-dom";
import CookieService from "../../Utils/Cookie";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#bd9400",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ForgotPassword = () => {
  const [Password, setPassword] = React.useState();
  const [RePassword, setRePassword] = React.useState();
  const [Token, setToken] = React.useState();

  const classes = useStyles();
  const history = useHistory();

  React.useEffect(() => {
    CookieService.remove();
    const url = window.location.href;
    const words = url.split("/");
    setToken(words[words.length - 1]);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("sample");
    const password = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}user/resetpassword/${Token}`,
      {
        password: Password,
        confirmPassword: RePassword,
      }
    );

    console.log(password);

    if (password.data.success === true) {
      alert("password change successfully");
      history.push("/signin");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Password Change
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Enter New Password"
                name="email"
                type="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Re-Enter Password"
                name="email"
                type="password"
                value={RePassword}
                onChange={(e) => setRePassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ backgroundColor: "#bd9400" }}
            className={classes.submit}
          >
            Change Password
          </Button>
          <Grid container justifyContent="flex-end"></Grid>
        </form>
      </div>
    </Container>
  );
};

export default ForgotPassword;
