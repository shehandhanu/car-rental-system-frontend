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
    textDecoration: null,
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
          <a href="#about">
            <Button className={classes.hbutton}>ABOUT US</Button>
          </a>
          <a href="#team">
            <Button className={classes.hbutton}>TEAM</Button>
          </a>
          <a href="#contactus">
            <Button className={classes.hbutton}>CONTACT US</Button>
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

// import React from "react";

// const Header = () => {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg fixed-top" id="mainNav">
//         <div className="container">
//           <a className="navbar-brand" href="#hero">
//             <img
//               src={require("../../assets/img/navbar-logo.png").default}
//               alt="Logo."
//             />
//           </a>
//           <div className="" id="navbarResponsive">
//             <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link" href="#services">
//                   Services
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#team">
//                   Team
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a
//                   class="btn btn-primary nav-link text-uppercase"
//                   href="#services"
//                 >
//                   Sign In
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a
//                   class="btn btn-primary nav-link text-uppercase"
//                   href="#services"
//                 >
//                   Sign Up
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header;
