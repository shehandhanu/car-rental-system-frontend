import React from 'react'
import axios from 'axios'
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
import { Button, Box } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: 1350
    },
    list: {
      align: "center",
      justifyContent: "center",
    },
    card: {
      display: "flex",
      width: 1250,
      align: "center",
      margin: 10
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 200,
    },
  
  }));

const LeavesList = () => {
    const classes = useStyles();
    const [leaves, setLeaves] = React.useState([])

    React.useEffect(async() => {
        let data = await axios.get('http://localhost:4000/api/v1/leaves/getleaves')
        setLeaves(data.data.leaves)
        
    },[!leaves])
    
    // console.log(emp);
    return (
        <div>
        <div className={classes.paper}>
            <Container maxWidth="lg">
            <Grid justifyContent="center" container spacing={4}>
                {leaves.map((leaves) => (
                <FeaturedPost  key={leaves._id} leaves={leaves} />
                ))}
            </Grid>
            </Container>
            </div>
        </div>
    )
}

export default LeavesList



function FeaturedPost(props) {
  const classes = useStyles();
  const { leaves } = props;
  //console.log(props);
  return (
    <div className={classes.paper}>
      <Grid item xs={20}>
        <CardActionArea component="a" href="#">
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <Link style={{textDecoration: "none", color: "#000000"}}to= {{pathname:"/userprofile",data: {empData:leaves}, }} >
              <CardContent>
                <Typography component="h5" variant="h5">
                  <b>Employee Name : </b> {leaves.emName}
                </Typography>

                <Typography variant="subtitle1" color="textSecondary">
                 <b>Number Of Days : </b> {leaves.noOfDates}
                </Typography>
            
                <Typography component="subtitle1" color="textSecondary">
                  <b>From : </b> {leaves.startDate}
                </Typography>
                <br/>
                <Typography component="subtitle1" color="textSecondary">
                  <b>To : </b> {leaves.endDate}
                </Typography>
                <br/>
                <Typography component="subtitle1" color="textSecondary">
                  <b>Email : </b> {leaves.email}
                </Typography>
                <br/>
                <Typography component="subtitle1" color="textSecondary">
                  <b>Reason : </b> {leaves.reason}
                </Typography> 
              </CardContent>
              </Link>
            </div>
            <Hidden xsDown>
              <div
                className={classes.cardMedia}
                image={leaves.image}
                title={leaves.imageTitle}
              >
                  
                  <Grid xs={12}>
                    <Box mt={3}>

                    </Box>


      
                    <button type="button" className="btn btn-warning button m-2">Accept</button>
            
                    
                    
                    <button type="button" className="btn btn-danger button m-2">Reject</button>
                  </Grid>
                  
              
                 
                  </div>
            </Hidden>
          </Card>
        </CardActionArea>
      </Grid>
    </div>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};

