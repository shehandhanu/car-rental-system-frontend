import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import ReactDatePicker from "react-datepicker";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://res.cloudinary.com/dxz8wbaqv/image/upload/v1627809859/afproject/CR_Banner_chojyy_dl2mjd.png)",
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
    backgroundColor: "#bd9400",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const UserReport = () => {
  const classes = useStyles();
  const [StartDate, setStartDate] = React.useState();
  const [EndDate, setEndDate] = React.useState();
  const [pdfResponse, setpdfResponse] = React.useState("");

  React.useEffect(() => {}, [pdfResponse]);

  async function getPDF(e) {
    e.preventDefault();
    const dates = {
      StartDate: StartDate,
      EndDate: EndDate,
    };
    const data = await axios.post(
      "https://car-rentalsystem-backend.herokuapp.com/api/v1/reservation/genreport/610d8c4ce7a1f853f49119b7",
      dates,
      { withCredentials: true }
    );
    setpdfResponse(data.data.response);
    console.log(data);
  }

  return (
    <div>
      <Grid container component="main" className={classes.root}>
        <Grid item xs={12} sm={8} md={3} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Box mt={10}> </Box>
            <Typography component="h1" variant="h5">
              Report Genaration
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={StartDate}
                onChange={(e) => setStartDate(e.target.value)}
                type="date"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={EndDate}
                onChange={(e) => setEndDate(e.target.value)}
                type="date"
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                style={{ backgroundColor: "#bd9400" }}
                className={classes.submit}
                onClick={getPDF}
              >
                Genarate
              </Button>
            </form>
          </div>
        </Grid>
        <Grid item xs={false} sm={4} md={9} /*className={classes.image}*/>
          <div>
            <iframe
              style={{ width: "100%", height: "666px" }}
              src={pdfResponse}
              type="application/pdf"
              title="title"
            ></iframe>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserReport;
