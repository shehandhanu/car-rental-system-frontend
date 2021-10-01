import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
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
  hbutton: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    color: "#fffff0",
    textTransform: "none",
  },
}));

export default function ForgotPasswordEmail(props) {
  const classes = useStyles();
  const history = useHistory();
  const [token, setToken] = React.useState();

  React.useEffect(() => {
    const url = window.location.href;
    const words = url.split("/");
    setToken(words[words.length - 1]);
  }, []);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    console.log(token);
    const user = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/user/confirmation/${token}`
    );

    console.log(user);

    if (user.data.success === true) {
      history.push("/");
    }
  };

  return (
    <React.Fragment>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
          style={{ color: "#bd9400" }}
        >
          Your Account Verified....
        </Typography>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
          style={{ color: "#bd9400" }}
        >
          <Button
            // fullWidth
            onClick={() => handleSubmit()}
            variant="contained"
            color="primary"
            style={{ backgroundColor: "#bd9400" }}
            className={classes.submit}
          >
            Home
          </Button>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
