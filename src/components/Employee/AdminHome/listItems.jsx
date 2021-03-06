import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link style={{textDecoration: "none", color: "#000000"}} to="/employeeinsert">
        <ListItemText primary="Employee Registration"/>
      </Link>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link style={{textDecoration: "none", color: "#000000"}} to="/employeelist">
        <ListItemText primary="Employee Details" />
      </Link>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link style={{textDecoration: "none", color: "#000000"}} to="/approveleaves">
        <ListItemText primary="Approve Leaves"/>
      </Link>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <Link style={{textDecoration: "none", color: "#000000"}} to="/reportgen">
        <ListItemText primary="Report Generate" />
      </Link>
    </ListItem>
   
  </div>
);

