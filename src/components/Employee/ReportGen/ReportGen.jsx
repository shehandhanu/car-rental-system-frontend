import React, { FC, useState } from "react";
import MaterialTable from "material-table";
import { Container, Paper } from "@material-ui/core";
import axios from "axios";
import "jspdf-autotable";
import jsPDF from "jspdf";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import CssBaseline from "@material-ui/core/CssBaseline";

export default function VehicleInformation() {
  const [columns, setColumns] = useState([
    { title: "Full Name", field: "fName" },
    { title: "NIC", field: "Nic" },
    { title: "Employee Contact Number", field: "emCoNo" },
    { title: "Email Address", field: "email" },
    { title: "Age", field: "age" },
    { title: "Address line 1", field: "emAddress.line1" },
    { title: "Address line 2", field: "emAddress.line2" },
    { title: "City", field: "emAddress.city" },
    { title: "State", field: "emAddress.state" },
    { title: "Gender", field: "gender" },
    { title: "Employee Type", field: "emType" },
  ]);

  console.log("hellp");

  const [emp, setEmp] = React.useState([]);

  React.useEffect(async () => {
    let data = await axios.get(
      "https://car-rentalsystem-backend.herokuapp.com/api/v1/employee/getemployee"
    );
    setEmp(data.data.emp);

    console.log("emp", emp);
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <CssBaseline />
      <Typography
        component="h1"
        variant="h4"
        style={{ marginLeft: 470, marginTop: 50 }}
      >
        Employee Information
      </Typography>
      <MaterialTable
        style={{ padding: 20, marginTop: 30 }}
        title=""
        columns={columns}
        data={emp}
        options={{
          exportButton: true,
          headerStyle: {
            backgroundColor: "#ffc800",
            color: "#000",
          },
          pageSize: 5,
          paging: true,
        }}
      />
    </div>
  );
}
