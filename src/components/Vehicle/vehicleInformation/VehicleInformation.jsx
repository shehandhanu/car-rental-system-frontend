import React, { FC, useState } from "react";
import MaterialTable from "material-table";
import { Container, Paper } from "@material-ui/core";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import CssBaseline from "@material-ui/core/CssBaseline";

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function VehicleInformation() {
  const [columns, setColumns] = useState([
    { title: "Vehicle Number", field: "vehicleNumber" },
    { title: "Name", field: "vehicleName" },
    { title: "Category", field: "vehicleCategory" },
    { title: "Manufactured Year", field: "manufactureYear" },
    { title: "Supplier", field: "vehicleSupplier" },
    { title: "Color", field: "vehicleColor" },
    { title: "Type", field: "vehicleType" },
    { title: "Price", field: "vehiclePrice" },
    { title: "Condition", field: "vehicleCondition" },
    { title: "Mileage", field: "mileage" },
    { title: "Fuel Type", field: "fuelType" },
    // { title: "Registered Date", field: "registerDate" },
    { title: "Specification", field: "specification" },
  ]);




  const [vehicles, setVehicles] = React.useState([]);

  React.useEffect(async () => {
    let data = await axios.get(
      "http://localhost:4000/api/v1/vehical/getvehicals"
    );
    setVehicles(data.data.vehical);
  }, []);




    const updateVehicle = async (newData) => {
        console.log("new dataaa", newData)
        console.log("new data iddd", newData._id)
        await axios.put("http://localhost:4000/api/v1/vehical/updatevehicals/" + newData._id,newData)
            .then((res)=>{
                console.log(res)
                window. location. reload()
                // alert("Successfully Updated")
            })
            .catch((err)=>{
                alert(err.message)
            })
    }

    const deleteVehicle = async (oldData) => {
        // console.log("new dataaa", newData)
        // console.log("new data iddd", newData._id)
        await axios.delete("http://localhost:4000/api/v1/vehical/deletevehicals/" + oldData._id)
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
        Vehicle Information
      </Typography>

      <MaterialTable
        style={{ padding: 20, marginTop: 30 }}
        title=""
        columns={columns}
        data={vehicles}
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
                const dataUpdate = [...vehicles];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setVehicles([...dataUpdate]);

                updateVehicle(newData);
                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...vehicles];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setVehicles([...dataDelete]);

                deleteVehicle(oldData);
                resolve();
              }, 1000);
            }),
        }}
      />
    </div>
  );
}
