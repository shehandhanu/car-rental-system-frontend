import React, { FC, useState } from "react";
import MaterialTable from "material-table";
import { Container, Paper } from "@material-ui/core";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import CssBaseline from "@material-ui/core/CssBaseline";

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

  const [dataz, setDataz] = useState([
    {
      vehicleNumber: "5898V",
      vehicleName: "Toyota CHR",
      vehicleCategory: "Car",
      manufactureYear: 2015,
      vehicleSupplier: "KIA Motors",
      vehicleColor: "Crimson",
      vehicleType: "Automatic",
      vehiclePrice: 2500000.0,
      vehicleCondition: "Used",
      mileage: 15000,
      fuelType: "Diesel",
      registerDate: "2020 / 05 / 07",
      specification: "Bodykit",
    },
    {
      vehicleNumber: "9562G",
      vehicleName: "Toyota Camri",
      vehicleCategory: "Car",
      manufactureYear: 2012,
      vehicleSupplier: "Ikman",
      vehicleColor: "Silver",
      vehicleType: "Automatic",
      vehiclePrice: 2000000.0,
      vehicleCondition: "Used",
      mileage: 20000,
      fuelType: "Diesel",
      registerDate: "2019 / 01 / 01",
      specification: "",
    },
  ]);

  const [vehicles, setVehicles] = React.useState([]);

  React.useEffect(async () => {
    let data = await axios.get(
      "http://localhost:4000/api/v1/vehical/getvehicals"
    );
    setVehicles(data.data.vehical);
  }, []);

  console.log("vehiclessss", vehicles);

  // const [tableDatas, setTableData] = useState(
  //   vehicles.map((e) => ({
  //     vehicleNumber: e.vehicleNumber,
  //     vehicleName: e.vehicleName,
  //     vehicleCategory: e.vehicleCategory,
  //     id: e.attendanceInfoId,
  //     teamId: e.teamId,
  //     locationId: e.locationId,
  //     employee: e.username,
  //     team: e.teamName,
  //     date: e.attendanceDate,
  //     startTime: e.startTime
  //       ? moment(new Date(e.attendanceDate + " " + e.startTime)).format()
  //       : "",
  //     endTime: e.endTime
  //       ? moment(new Date(e.attendanceDate + " " + e.endTime)).format()
  //       : "",
  //   }))
  // );

  // console.log("tableDatassss", tableDatas);

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

                resolve();
              }, 1000);
            }),
        }}
      />
    </div>
  );
}
