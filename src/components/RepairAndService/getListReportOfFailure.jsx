import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import axios from "axios";
import { useState } from "react";

const initialState = {
  serviceDetails: [],
};

export default class GetListReportOfFailure extends React.Component {
  // const [serviceDetails, setServiceDetails] = useState([]);

  // useEffect(async () => {
  //   let details = await axios.get(
  //     "http://localhost:4000/api/v1/service/getReportOfservice"
  //   );
  //   console.log(details.data.reportOfService);
  //   setServiceDetails(details.data.reportOfService);
  // }, [!serviceDetails]);

  constructor(props) {
    super(props);
    this.state = initialState;
    axios
      .get("http://localhost:4000/api/v1/service/getReportOfservice")
      .then((Response) => {
        console.log(Response);
        this.setState({ serviceDetails: Response.data.reportOfService });
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  ischecked = async (id) => {
    console.log(id);
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

  // deleteRow(id, e) {
  //   axios
  //     .delete(
  //       "http://localhost:4000/api/v1/service/deleteReportOfservice/${id}"
  //     )
  //     .then((Response) => {
  //       console.log(Response);
  //       console.log(Response.data);
  //       const serviceDetails = this.state.serviceDetails.filter(
  //         (item) => item._id !== id
  //       );
  //       this.setState({ serviceDetails });
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });
  // }
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
              <th scope="col" className="w-25">
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
                    // <div>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ marginLeft: 5 }}
                      onClick={() =>
                        (window.location.href = "/quotationForTheVehicle")
                      }
                    >
                      Create a Quotation
                    </Button>
                  ) : // </div>
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
