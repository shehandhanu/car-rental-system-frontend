import React from "react";
import { MDBDataTable } from "mdbreact";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { green, grey, purple } from "@material-ui/core/colors";

export default class GetListOfApprovedQuotation extends React.Component {
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
            Approved quotation for the vehicle repair or service
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
                  Approved
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Repair</td>
              <td>DCS-1236</td>
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
                  Pending
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

//export default GetListOfApprovedQuotation;
