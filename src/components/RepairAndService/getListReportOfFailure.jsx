import React, { useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import MaterialTable from "material-table";

const initialState = {
  serviceDetails: [],
};

export default class GetListReportOfFailure extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    axios
      .get("http://localhost:4000/api/v1/service/getReportOfservice")
      .then((Response) => {
        //console.log(Response);
        this.setState({ serviceDetails: Response.data.reportOfService });
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  ischecked = async (id) => {
    //console.log(id);
    await axios.get(
      "http://localhost:4000/api/v1/service/checkReportOfservice/" + id._id
    );

    await axios
      .get("http://localhost:4000/api/v1/service/getReportOfservice")
      .then((Response) => {
        console.log(Response);
        this.setState({ serviceDetails: Response.data.reportOfService });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  deleteDetails = (id) => {
    axios
      .delete(
        "http://localhost:4000/api/v1/service/deleteReportOfservice/" + id
      )
      .then((response) => {
        if (response.data != null) {
          alert("Service Details Deleted");
          this.setState({
            serviceDetails: this.state.serviceDetails.filter(
              (detail) => detail._id !== id
            ),
          });
        }
      });
  };

  UpdateDetails = (id) => {
    //console.log(id);
    this.props.history.push("/quotationForTheVehicle/" + id);
  };

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
            Report of failure or service in a vehicle
          </Box>
        </Typography>

        {/* <MDBDataTable striped bordered small data={data} /> */}

        <table class="table table-striped table-bordered table-hover">
          <thead class="thead-dark">
            <tr className="table-dark">
              <th scope="col">No</th>
              <th scope="col">Failure/Service</th>
              <th scope="col">Vehicle No.</th>
              <th scope="col">Service/Failure Date</th>
              <th scope="col">Assembling Parts</th>
              <th scope="col" style={{ width: 380 }}>
                Actions
              </th>
            </tr>
          </thead>
          {this.state.serviceDetails.map((id, i) => (
            <tbody>
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{id.type}</td>
                <td>{id.vehino}</td>
                <td>{id.serviceDate}</td>
                <td>{id.serviceParts}</td>
                <td>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => this.ischecked(id)}
                    style={{ marginLeft: 5 }}
                  >
                    Check
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginLeft: 5 }}
                    onClick={this.deleteDetails.bind(this, id._id)}
                  >
                    Delete
                  </Button>
                  {id.isChecked === true ? (
                    <div style={{ float: "right" }}>
                      {id.isQutationCreated == false ? (
                        <Link
                          to={{
                            pathname: "/quotationForTheVehicle",
                            state: id,
                          }}
                        >
                          <Button
                            variant="contained"
                            color="primary"
                            style={{ marginLeft: 5 }}
                          >
                            Create a Quotation
                          </Button>
                        </Link>
                      ) : (
                        <Button
                          variant="contained"
                          style={{
                            marginLeft: 5,
                            backgroundColor: "#61CC63",
                            color: "#ffffff",
                            width: 180,
                            fontSize: 12,
                          }}
                        >
                          Quotation Completed
                        </Button>
                      )}
                    </div>
                  ) : // <div>
                  // </div>
                  null}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}
