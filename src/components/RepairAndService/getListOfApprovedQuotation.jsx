import React from "react";
import { MDBDataTable } from "mdbreact";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const GetListOfApprovedQuotation = () => {
  const data = {
    columns: [
      {
        label: "No.",
        field: "num",
        sort: "asc",
        width: 150,
      },
      {
        label: "Failure/Service",
        field: "type",
        sort: "asc",
        width: 150,
      },
      {
        label: "Vehicle No.",
        field: "vehinum",
        sort: "asc",
        width: 50,
      },
      {
        label: "View",
        field: "view",
        sort: "asc",
        width: 50,
      },
      {
        label: "Update",
        field: "update",
        sort: "asc",
        width: 50,
      },
      {
        label: "Delete",
        field: "delete",
        sort: "asc",
        width: 50,
      },
      {
        label: "Approved or Not",
        field: "approve",
        sort: "asc",
        width: 50,
      },
    ],
    rows: [
      {
        num: "1",
        type: "Repair",
        vehinum: "CGH-1325",
        view: <Button variant="contained">View</Button>,
        update: (
          <Button variant="contained" color="primary">
            Update
          </Button>
        ),
        delete: (
          <Button variant="contained" color="secondary">
            Delete
          </Button>
        ),
        approve: (
          <Button variant="contained" color="primary">
            Approved
          </Button>
        ),
      },
      {
        num: "1",
        type: "Repair",
        vehinum: "CGH-1325",
        view: <Button variant="contained">View</Button>,
        update: (
          <Button variant="contained" color="primary">
            Update
          </Button>
        ),
        delete: (
          <Button variant="contained" color="secondary">
            Delete
          </Button>
        ),
        approve: (
          <Button variant="contained" color="primary">
            Approved
          </Button>
        ),
      },
    ],
  };
  return (
    <div className="w-75 mx-auto mt-5">
      <Typography
        variant="h2"
        gutterBottom
        color="textSecondary"
        display="block"
      >
        <Box color="primary.main">
          Approved quotation for the vehicle repair or service
        </Box>
      </Typography>
      <MDBDataTable striped bordered small data={data} />
    </div>
  );
};

export default GetListOfApprovedQuotation;
