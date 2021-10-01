import React, { FC, useState } from "react";
import MaterialTable from "material-table";
import { Container, Paper } from "@material-ui/core";

import axios from "axios";
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




    const [owners, setOwners] = React.useState([]);

    React.useEffect(async () => {
        let data = await axios.get(
            "http://localhost:4000/api/v1/owner/getowners"
        );

        setOwners(data.data.owner);

        console.log("ownersss", owners);
    }, []);




    const updateOwner = async (newData) => {
        console.log("new dataaa", newData)
        console.log("new data iddd", newData._id)
        await axios.put("http://localhost:4000/api/v1/owner/updateowners/" + newData._id,newData)
            .then((res)=>{
                // alert("Successfully Updated")
            })
            .catch((err)=>{
                alert(err.message)
            })
    }

    const deleteOwner = async (oldData) => {
        // console.log("new dataaa", newData)
        // console.log("new data iddd", newData._id)
        await axios.delete("http://localhost:4000/api/v1/owner/deleteowners/" + oldData._id)
            .then((res)=>{
                // alert("Successfully Deleted")
            })
            .catch((err)=>{
                alert(err.message)
            })
    }


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
        data={owners}
        options={{
            exportButton: true,
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
                const dataUpdate = [...owners];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setOwners([...dataUpdate]);

                  updateOwner(newData);

                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...owners];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setOwners([...dataDelete]);

                  deleteOwner(oldData);

                resolve();
              }, 1000);
            }),
        }}
      />
    </div>
  );
}
