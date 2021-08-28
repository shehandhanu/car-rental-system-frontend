import React from "react";
import { MDBDataTable } from "mdbreact";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { green, grey, purple } from "@material-ui/core/colors";

export default class GetListOfQuotationOwner extends React.Component {
  // const data = {
  //   columns: [
  //     {
  //       label: "No.",
  //       field: "num",
  //       sort: "asc",
  //       width: 150,
  //     },
  //     {
  //       label: "Failure/Service",
  //       field: "type",
  //       sort: "asc",
  //       width: 150,
  //     },
  //     {
  //       label: "Vehicle No.",
  //       field: "vehinum",
  //       sort: "asc",
  //       width: 50,
  //     },
  //     {
  //       label: "View",
  //       field: "view",
  //       sort: "asc",
  //       width: 50,
  //     },
  //     {
  //       label: "Update",
  //       field: "update",
  //       sort: "asc",
  //       width: 50,
  //     },
  //     {
  //       label: "Delete",
  //       field: "delete",
  //       sort: "asc",
  //       width: 50,
  //     },
  //     {
  //       label: "Approved or Not",
  //       field: "approve",
  //       sort: "asc",
  //       width: 50,
  //     },
  //   ],
  //   rows: [
  //     {
  //       num: "1",
  //       type: "Repair",
  //       vehinum: "CGH-1325",
  //       view: <Button variant="contained">View</Button>,
  //       update: (
  //         <Button variant="contained" color="primary">
  //           Update
  //         </Button>
  //       ),
  //       delete: (
  //         <Button variant="contained" color="secondary">
  //           Delete
  //         </Button>
  //       ),
  //       approve: (
  //         <Button variant="contained" color="primary">
  //           Approved
  //         </Button>
  //       ),
  //     },
  //     {
  //       num: "1",
  //       type: "Repair",
  //       vehinum: "CGH-1325",
  //       view: <Button variant="contained">View</Button>,
  //       update: (
  //         <Button variant="contained" color="primary">
  //           Update
  //         </Button>
  //       ),
  //       delete: (
  //         <Button variant="contained" color="secondary">
  //           Delete
  //         </Button>
  //       ),
  //       approve: (
  //         <Button variant="contained" color="primary">
  //           Approved
  //         </Button>
  //       ),
  //     },
  //   ],
  // };
  render() {
    return (
      <div className="w-75 mx-auto mt-5">
        <Typography
          variant="h2"
          gutterBottom
          color="textSecondary"
          display="block"
        >
          <Box color="primary.main">
            Quotation for the vehicle repair or service
          </Box>
        </Typography>
        <table class="table table-striped table-bordered table-hover">
          <thead class="thead-dark">
            <tr className="table-dark">
              <th scope="col">No</th>
              <th scope="col">Failure/Service</th>
              <th scope="col">Vehicle No.</th>
              <th scope="col" style={{ width: 350 }}>
                Actions
              </th>
            </tr>
          </thead>
          {/* {this.state.serviceDetails.map((id, i) => ( */}
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Service</td>
              <td>ADS-2154</td>
              <td>
                <Button
                  variant="contained"
                  //onClick={() => this.ischecked(id)}
                  style={{ marginLeft: 5, color: grey }}
                >
                  View
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  //onClick={() => this.ischecked(id)}
                  style={{ marginLeft: 5, color: green }}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginLeft: 5 }}
                  //onClick={this.deleteDetails.bind(this, id._id)}
                >
                  Delete
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginLeft: 5, color: purple }}
                  // onClick={() =>
                  //   (window.location.href = "/quotationForTheVehicle")
                  // }
                >
                  Approve
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Failure</td>
              <td>DFG-7854</td>
              <td>
                <Button
                  variant="contained"
                  //onClick={() => this.ischecked(id)}
                  style={{ marginLeft: 5, color: grey }}
                >
                  View
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  //onClick={() => this.ischecked(id)}
                  style={{ marginLeft: 5, color: green }}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginLeft: 5 }}
                  //onClick={this.deleteDetails.bind(this, id._id)}
                >
                  Delete
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginLeft: 5, color: purple }}
                  // onClick={() =>
                  //   (window.location.href = "/quotationForTheVehicle")
                  // }
                >
                  Approve
                </Button>
              </td>
            </tr>
          </tbody>
          {/* ))} */}
        </table>
      </div>
    );
  }
}

//export default GetListOfQuotationOwner;
