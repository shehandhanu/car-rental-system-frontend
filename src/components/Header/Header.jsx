import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbarcolor: {
    backgroundColor: "#302f2f",
  },
  buttoncolor: {
    backgroundColor: "#bd9400",
    marginLeft: 20,
  },
  logo: {
    width: "10px",
  },
  hbutton: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    color: "#fffff0",
    textTransform: "none",
  },
}));

export default function ButtonAppBar() {
  const [User, setUser] = React.useState("");
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  React.useEffect(() => {
    const user = "Shehan Dhanuddara";
    setUser(user);
  }, [!User]);

  let url = window.location.href;
  console.log(url);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbarcolor} position="static">
        <Toolbar>
          <div className={classes.logo}>
            <a href="#hero">
              <img
                style={{ width: "200px" }}
                src={require("../../assets/img/navbar-logo.png").default}
                alt="Logo."
              />
            </a>
          </div>
          <Typography variant="h6" className={classes.title}></Typography>
          {url === "http://localhost:3000/" ? (
            <div>
              <Button style={{ marginLeft: 20 }} color="inherit">
                Home
              </Button>
            </div>
          ) : null}

          <a style={{ textDecoration: "none" }} href="#team">
            <Button className={classes.hbutton}>TEAM</Button>
          </a>
          <a style={{ textDecoration: "none" }} href="#services">
            <Button className={classes.hbutton}>SERVICES</Button>
          </a>
          <Button style={{ marginLeft: 20 }} color="inherit">
            Vehicals
          </Button>
          <Button style={{ marginLeft: 20 }} color="inherit">
            Admin
          </Button>
          {!User ? (
            <div>
              <Button className={classes.buttoncolor} color="inherit">
                Sign In
              </Button>
              <Button className={classes.buttoncolor} color="inherit">
                Sign Up
              </Button>
            </div>
          ) : (
            <div>
              <Button
                onClick={handleClick}
                style={{ marginLeft: 20 }}
                color="inherit"
              >
                {User}
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={{ marginTop: 50 }}
              >
                {User ? (
                  <MenuItem onClick={handleClose}>
                    <div>
                      <Link
                        to={"/addresearch"}
                        style={{ textDecoration: "none", color: "#00000f" }}
                      >
                        <Button style={{ width: "200px" }} color="inherit">
                          Report Genarate
                        </Button>
                      </Link>
                    </div>
                  </MenuItem>
                ) : null}
                {User ? (
                  <MenuItem onClick={handleClose}>
                    <div>
                      <Link
                        to={"/sessionpraposal"}
                        style={{ textDecoration: "none", color: "#00000f" }}
                      >
                        <Button style={{ width: "200px" }} color="inherit">
                          History
                        </Button>
                      </Link>
                    </div>
                  </MenuItem>
                ) : null}
                <MenuItem onClick={handleClose}>
                  <Link
                    to={"/profile"}
                    style={{ textDecoration: "none", color: "#00000f" }}
                  >
                    <Button style={{ width: "200px" }} color="inherit">
                      Profile
                    </Button>
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
