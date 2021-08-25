import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import axios from "axios";
import CookieService from "../../Utils/Cookie";

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
  const [token, settoken] = React.useState(CookieService.get("token"));
  const [User, setUser] = React.useState();
  const [UserData, setUserData] = React.useState();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useStyles();
  const history = useHistory();

  // const token = CookieService.get("token");

  React.useEffect(() => {
    if (token == null) {
      console.log("No User");
      setUser(false);
    } else {
      setUser(true);
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

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  let url = window.location.href;

  const logout = () => {
    CookieService.remove();
    settoken(false);
    setUser(false);
    // toast.success(`Logout Success`);
    history.push("/");
  };

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
          {url.toString() === "http://localhost:3000/" ? null : (
            <div>
              <Link
                to={"/"}
                style={{ textDecoration: "none", color: "#fffff0" }}
              >
                <Button style={{ marginLeft: 20 }} color="inherit">
                  Home
                </Button>
              </Link>
            </div>
          )}

          <a style={{ textDecoration: "none" }} href="#team">
            <Button className={classes.hbutton}>TEAM</Button>
          </a>
          <a style={{ textDecoration: "none" }} href="#services">
            <Button className={classes.hbutton}>SERVICES</Button>
          </a>
          <Link
            to={"/carlist"}
            style={{ textDecoration: "none", color: "#fffff0" }}
          >
            <Button style={{ marginLeft: 20 }} color="inherit">
              Vehicals
            </Button>
          </Link>
          {UserData && UserData.role === "admin" ? (
            <div>
              <Link
                to={"/admin"}
                style={{ textDecoration: "none", color: "#fffff0" }}
              >
                <Button style={{ marginLeft: 20 }} color="inherit">
                  Admin Pannel
                </Button>
              </Link>
            </div>
          ) : null}
          {!User ? (
            <div>
              <Link
                to={"/signin"}
                style={{ textDecoration: "none", color: "#fffff0" }}
              >
                <Button className={classes.buttoncolor} color="inherit">
                  Sign In
                </Button>
              </Link>
              <Link
                to={"/signup"}
                style={{ textDecoration: "none", color: "#fffff0" }}
              >
                <Button className={classes.buttoncolor} color="inherit">
                  Sign Up
                </Button>
              </Link>
            </div>
          ) : (
            <div>
              <Button
                onClick={handleClick}
                style={{ marginLeft: 20 }}
                color="inherit"
                startIcon={<AccountCircleIcon />}
              >
                {UserData && UserData.firstName + " " + UserData.lastName}
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
                        to={"/userreport"}
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
                        to={"/userhistory"}
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

              {/* <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                // aria-controls={menuId}
                aria-haspopup="true"
                // onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton> */}

              <IconButton color="inherit" onClick={logout}>
                <ExitToAppIcon />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
