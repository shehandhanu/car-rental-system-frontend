import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import CookieService from "../../Utils/Cookie";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper1: {
    marginTop: theme.spacing(0),
    display: "flex",
    flexDirection: "row",
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
  input: {
    display: "none",
  },
}));

const UserProfile = () => {
  const [token, settoken] = React.useState(CookieService.get("token"));
  const [UserData, setUserData] = React.useState();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useStyles();
  const history = useHistory();

  React.useEffect(() => {
    if (token == null) {
      console.log("No User");
    } else {
      async function fectchData() {
        const userDetails = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/user/profile`,
          {
            withCredentials: true,
          }
        );
        setUserData(userDetails.data.user);
      }
      fectchData();
    }
  }, []);

  console.log(UserData && UserData);

  return (
    <Container component="main" maxWidth="md">
      <div className={classes.paper}>
        <Grid item xs={12}>
          <div className={classes.paper}>
            <img
              src={UserData && UserData.avatar.url}
              style={{
                width: 150,
                height: 150,
                borderRadius: 75,
                marginTop: 30,
              }}
            />
          </div>
        </Grid>
      </div>
      <div className={classes.paper1}>
        <Grid item xs={9}>
          <div className={classes.paper} style={{ marginTop: 0 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} container spacing={1}>
                <Grid item xs={12}>
                  <Typography component="h1" variant="h6">
                    <b>First Name : </b> {UserData && UserData.firstName}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} container spacing={2}>
                <Grid item xs={12}>
                  <Typography component="h1" variant="h6">
                    <b>Last Name : </b>
                    {UserData && UserData.lastName}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={12} container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography component="h1" variant="h6">
                    <b>Mobile Number : </b> {UserData && UserData.phoneNumber}
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Typography component="h1" variant="h6">
                    <b>BirthDay : </b>{" "}
                    {UserData && UserData.birthday.slice(0, 10)}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography component="h1" variant="h6">
                  <b>Email Address : </b> {UserData && UserData.email}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="h1" variant="h6">
                  <b>Password : </b> *********
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={3} style={{ marginTop: 50 }} container spacing={2}>
          <Box mt={5}></Box>
          <Grid item xs={12}>
            <Button
              variant="contained"
              align="center"
              color="primary"
              component="span"
              style={{ width: "100%" }}
            >
              Genarate Report
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              align="center"
              color="primary"
              component="span"
              style={{ width: "100%" }}
            >
              Trip History
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Link
              style={{ textDecoration: "none", color: "#fffff0" }}
              to={"/profileupdate"}
            >
              <Button
                variant="contained"
                align="center"
                color="primary"
                component="span"
                style={{ width: "100%" }}
              >
                Edit Profile
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              align="center"
              color="primary"
              component="span"
              style={{ width: "100%" }}
            >
              Logout
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              align="center"
              color="primary"
              component="span"
              style={{ width: "100%" }}
            >
              Delete Account
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default UserProfile;
