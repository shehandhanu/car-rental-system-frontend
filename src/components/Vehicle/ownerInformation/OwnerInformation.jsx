import React, { FC, useState } from "react";
import MaterialTable from "material-table";
import { Container, Paper } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

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
      <Typography
        component="h1"
        variant="h4"
        style={{ marginLeft: 470, marginTop: 50 }}
      >
        Vehicle Owner Information
      </Typography>
      <MaterialTable
        style={{ padding: 20, marginTop: 30 }}
        title=""
        columns={columns}
        data={data}
        options={{
          rowStyle: (rowData) => ({
            backgroundColor: rowData.tableData.id % 2 === 0 ? "#EEE" : "#FFF",
          }),
          headerStyle: {
            backgroundColor: "#ffc800",
            color: "#000",
          },
          pageSize: 5,
          actionsColumnIndex: -1,
          paging: true,
        }}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);

                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);

                resolve();
              }, 1000);
            }),
        }}
      />
    </div>
  );
}
