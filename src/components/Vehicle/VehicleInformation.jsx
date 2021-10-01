import React, { FC, useState } from "react";
import MaterialTable from "material-table";
import { Container, Paper } from "@material-ui/core";

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
    { title: "Registered Date", field: "registerDate" },
    { title: "Specification", field: "specification" },
  ]);

  const [data, setData] = useState([
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

  return (
    <div style={{ height: "100vh" }}>
      <CssBaseline />
      <Paper>
        <MaterialTable
          style={{ padding: 20, marginTop: 100 }}
          title="Vehicle Owner Information"
          columns={columns}
          data={data}
          options={{
            headerStyle: {
              backgroundColor: "#0460e9",
              color: "#FFF",
            },
            pageSize: 5,
            actionsColumnIndex: -1,
            paging: true,
          }}
        />
      </Paper>
    </div>
  );
}
