import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import AddressInput from 'material-ui-address-input'
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Container from "@material-ui/core/Container";
import 'jspdf-autotable';
import jsPDF from 'jspdf';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select:{  
    width:'500px !important'

  }
}));

export default function SignInSide(props) {
  const classes = useStyles();
  const [emp, setemp] = React.useState(props.location.data.empData)
  const [state, setState] = React.useState({
    fName: emp.fName,
    Nic: emp.Nic,
    emCoNo: emp.emCoNo,
    email: emp.email,
    age: emp.age,
    line1: emp.emAddress.line1,
    line2: emp.emAddress.line2,
    city: emp.emAddress.city,
    state: emp.emAddress.state,
    gender: emp.gender,
    emType: emp.emType
  });
  console.log(emp);
  
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={3} component={Paper} elevation={6} square></Grid>
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square >
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            User Profile
          </Typography>
          <form className={classes.form} noValidate>

          <TextField
              margin="normal"
              required
              fullWidth
              id="FName"
              label="Full Name"
              name="FName"
              value = {state.fName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Nic"
              label="NIC"
              name="FName"
              value = {state.Nic}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="CNo"
              label="Contact Number"
              name="CNo"
              value = {state.emCoNo}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              value = {state.email}
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="age"
              label="Age"
              value = {state.age}
              name="age"
            />

      
            <React.Fragment>
              <Typography variant="h6" gutterBottom>
                <br />
                Employee's Address
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address1"
                    value = {state.line1}
                    name="address1"
                    label="Address line 1"
                    fullWidth
                    autoComplete="shipping address-line1"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  
                    id="address2"
                    value = {state.line2}
                    name="address2"
                    label="Address line 2"
                    fullWidth
                    autoComplete="shipping address-line2"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    value = {state.city}
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="shipping address-level2"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField id="state" value = {state.state} name="state" label="State/Province/Region" fullWidth />
                </Grid>
              </Grid>
            </React.Fragment>
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="gender"
              label="Gender"
              value = {state.gender}
              name="gender"
              autoComplete="email"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="emType"
              value = {state.emType}
              label="Employee Type"
              name="emType"
              autoFocus
            />

         
       
          
          </form>
        </div>
      </Grid>
      <Grid item xs={12} sm={8} md={3} component={Paper} elevation={6} square></Grid>
    
    </Grid>
    
  );
}