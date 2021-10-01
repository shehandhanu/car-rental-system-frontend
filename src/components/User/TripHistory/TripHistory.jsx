import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
// import FeaturedPost from "./FeaturedPost";
// import CookieService from '../../API/Cookie'
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import { useHistory } from "react-router-dom";
import axios from "axios";
import CookieService from "../../../Utils/Cookie";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#bd9400",
  },
  list: {
    align: "center",
    justifyContent: "center",
  },
  card: {
    display: "flex",
    width: "750px",
    align: "center",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 200,
  },
}));

function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;
  console.log(post.reservationID.isPaid);
  const due = new Date(post.reservationID.due);
  const to = new Date(post.reservationID.to);
  return (
    <div className={classes.paper}>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                Due :
                {due.getFullYear() + "/" + due.getMonth() + "/" + due.getDate()}{" "}
                - To :
                {to.getFullYear() + "/" + to.getMonth() + "/" + to.getDate()}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Vihical ID : {post.reservationID.carID}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                User ID: {post.reservationID.userID}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Pyament :{post.reservationID.payment} Payment Status :
                {post.reservationID.isPaid == false ? " Not Paid" : " Paid"}
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={post.image}
              title={post.imageTitle}
            />
          </Hidden>
        </Card>
      </Grid>
    </div>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};

const TripHistory = () => {
  const classes = useStyles();

  const [UserData, setUserData] = React.useState();
  const [token, settoken] = React.useState(CookieService.get("token"));

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
        setUserData(userDetails.data.user.reservations);
      }
      fectchData();
    }
  }, [!UserData]);
  return (
    <div>
      <div className={classes.paper}>
        <Container maxWidth="lg">
          <Grid justifyContent="center" container spacing={4}>
            {UserData &&
              UserData.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default TripHistory;
