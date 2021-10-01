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
//import { useHistory } from "react-router-dom";


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

const EmployeeList = () => {
    const classes = useStyles();
    const [emp, setemp] = React.useState([])

    React.useEffect(async() => {
      let data = await axios.get('http://localhost:4000/api/v1/employee/getemployee')
      setemp(data.data.emp)
       
        
    },[!emp])


    
    // console.log(emp);
    return (
        <div>
        <div className={classes.paper}>
            <Container maxWidth="lg">
            <Grid justifyContent="center" container spacing={4}>
                {emp.map((emp) => (
                <FeaturedPost  key={emp._id} emp={emp} />
                ))}
            </Grid>
            </Container>
            </div>
        </div>
    )
}

export default EmployeeList



function FeaturedPost(props) {
  const classes = useStyles();
  const { emp } = props;
  //let history = useHistory(); 

  const deleteDetails = async (id) =>{
    alert("Deleted Successfully")
    await axios.delete('http://localhost:4000/api/v1/employee/deleteemployee/'+ id)
    //history.push("/employeelist");
    window. location. reload()
    

  }
  //console.log(props);
  return (
    
      <div className={classes.paper}  id="EmployeeReportTable">
    
      <Grid item xs={12} >
        <CardActionArea component="a" href="#" >
          <Card className={classes.card}>
            <div className={classes.cardDetails}>

              <Link style={{textDecoration: "none", color: "#000000"}}to= {{pathname:"/userprofile",data: {empData:emp}, }} >
              <CardContent>
                <Typography component="h2" variant="h5">
                  <b>Employee Name</b> {emp.fName}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                 <b>Contact Number</b> {emp.emCoNo}
                </Typography>
              </CardContent>
              </Link>
            </div>
            <Hidden xsDown>
              <div
                className={classes.cardMedia}
                image={emp.image}
                title={emp.imageTitle}
              >
                  
                  <Grid xs={12}>
                    <Box mt={3}>

                    </Box>


                    <Link to={{pathname:"/employeeupdateadmin", data: {empData:emp},}}>
                      <button type="button" className="btn btn-warning button m-2">Update</button>
                    </Link>
                    
                    
                    <button type="button" className="btn btn-danger button m-2" onClick={()=>deleteDetails(emp._id)}>Delete</button>
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

