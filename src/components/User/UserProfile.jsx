import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper1: {
    marginTop: theme.spacing(2),
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
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="md">
      {/* <div className={classes.paper}>
        <Box mt={5}></Box>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          User Profile
        </Typography>
      </div> */}
      <div className={classes.paper1}>
        <Grid item xs={9}>
          <Grid item xs={12} style={{ marginTop: 20 }}>
            <div className={classes.paper}>
              <img
                src="https://res.cloudinary.com/dxz8wbaqv/image/upload/v1629539043/afproject/SPM%20Project/1_itpduf.jpg"
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 75,
                  marginBottom: 50,
                }}
              />
            </div>
          </Grid>
          <div className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} container spacing={2}>
                <Grid item xs={12}>
                  <Typography component="h1" variant="h6">
                    <b>First Name : </b> Shehan
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} container spacing={2}>
                <Grid item xs={12}>
                  <Typography component="h1" variant="h6">
                    <b>Last Name : </b> Dhanuddara
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={12} container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography component="h1" variant="h6">
                    <b>Mobile Number : </b> 0765207513
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Typography component="h1" variant="h6">
                    <b>BirthDay : </b> 1998-05-31
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography component="h1" variant="h6">
                  <b>Email Address : </b> shehan.dhanuddara1998@gmail.com
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="h1" variant="h6">
                  <b>Password : </b> shehan123
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={3} style={{ marginTop: 150 }} container spacing={2}>
          <Box mt={5}></Box>
          <Grid item xs={12}>
            <Button
              variant="contained"
              align="center"
              color="primary"
              component="span"
              style={{ width: "100%" }}
            >
              Change Cover Page
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
              Change Cover Page
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
              Change Cover Page
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
              Change Cover Page
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
              Change Cover Page
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default UserProfile;
