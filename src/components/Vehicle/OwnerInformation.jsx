import React, { FC, useState } from "react";
import MaterialTable from "material-table";
import { Container, Paper } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";

import CssBaseline from "@material-ui/core/CssBaseline";

export default function OwnerInformation() {
  const [columns, setColumns] = useState([
    { title: "First Name", field: "ownerFirstName" },
    { title: "Last Name", field: "ownerLastName" },
    { title: "NIC", field: "ownerNIC" },
    { title: "Email", field: "ownerEmail" },
    { title: "Contact Number", field: "ownerContact" },
    { title: "Address", field: "ownerAddress" },
    { title: "Vehicle Numbers", field: "vehicleNumbers" },
  ]);

  const [data, setData] = useState([
    {
      ownerFirstName: "Hashini",
      ownerLastName: "Mudannayake",
      ownerNIC: "596874235V",
      ownerEmail: "hashini@gmail.com",
      ownerContact: "0775698412",
      ownerAddress: "15/4, Kottawa, Pannipitiya",
      vehicleNumbers: "5898V",
    },
    {
      ownerFirstName: "Saman",
      ownerLastName: "Kumara",
      ownerNIC: "856974123V",
      ownerEmail: "saman@gmail.com",
      ownerContact: "0779658412",
      ownerAddress: "Colombo Rd, Boyagane",
      vehicleNumbers: "9562G",
    },

    {
      ownerFirstName: "Ayesh",
      ownerLastName: "Rajapaksha",
      ownerNIC: "896541285V",
      ownerEmail: "ayesh@gmail.com",
      ownerContact: "0778965239",
      ownerAddress: "255/4, Werahera",
      vehicleNumbers: "8965N",
    },
  ]);

  return (
    <div style={{ height: "100vh" }}>
      <CssBaseline />
      <Paper>
        <MaterialTable
          style={{ padding: 20, marginTop: 100 }}
          title="Vehicle Information"
          columns={columns}
          data={data}
          options={{
            rowStyle: (rowData) => ({
              backgroundColor: rowData.tableData.id % 2 === 0 ? "#EEE" : "#FFF",
            }),
            headerStyle: {
              backgroundColor: "#0460e9",
              color: "#FFF",
            },
            pageSize: 5,
            paging: true,
          }}
        />
      </Paper>
    </div>
  );
}
