import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
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





function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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



export default function SignInSide() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    vehiModel:'',
    vehiNum:'',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Report Your Vehicle Issue
          </Typography>
          <form className={classes.form} noValidate>

          <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">Vehicle Model</InputLabel>
                <Select className={classes.select}
                  native
                  value={state.vehiModel}
                  onChange={handleChange}
                  inputProps={{
                    name: 'model',
                    id: 'age-native-simple',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={18}>18</option>
                  <option value={19}>19</option>
              
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">Vehicle Number</InputLabel>
                <Select className={classes.select}
                  native
                  value={state.vehiNum}
                  onChange={handleChange}
                  inputProps={{
                    name: 'vehiNum',
                    id: 'age-native-simple',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={18}>18</option>
                  <option value={19}>19</option>
              
                </Select>
            </FormControl>
          

          <TextField
              margin="normal"
              required
              fullWidth
              id="FName"
              label="Issue Of the Vehicle"
              name="FName"
              autoFocus
              multiline
              rows={2}
              rowsMax={4}
            />


            <TextField
              margin="normal"
              required
              fullWidth
              id="date"
              label="Date"
              name="date"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="eName"
              label="Employee Name"
              name="eName"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="emCoNo"
              label="Employee Contact Number"
              name="emCoNo"
              autoFocus
            />

          
            
  
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              SUBMIT
            </Button>
       
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}