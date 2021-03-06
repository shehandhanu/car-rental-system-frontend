import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { green, grey, purple } from "@material-ui/core/colors";
import axios from "axios";
import { Link } from "react-router-dom";

const GetListOfApprovedQuotation = () => {
  const [quotationDetails, setQuotationDetails] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://car-rentalsystem-backend.herokuapp.com/api/v1/service/getListOfQuotations"
      )
      .then((Response) => {
        console.log(Response.data.quotationOfService);
        setQuotationDetails(Response.data.quotationOfService);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [!quotationDetails]);

  const deleteDetails = (id) => {
    axios
      .delete(
        "https://car-rentalsystem-backend.herokuapp.com/api/v1/service/deleteQuotationsManager/" +
          id
      )
      .then((response) => {
        if (response.data != null) {
          console.log(response.data);
          alert("Quotation Details Deleted");
          // this.setState({
          //   quotationDetails: this.state.quotationDetails.filter(
          //     (detail) => detail._id !== id
          //   ),
          // });
        }
      });
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
      <table class="table table-striped table-bordered table-hover">
        <thead class="thead-dark">
          <tr className="table-dark">
            <th scope="col" style={{ textAlign: "center" }}>
              No
            </th>
            <th scope="col" style={{ width: 250, textAlign: "center" }}>
              Failure/Service
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              Vehicle No.
            </th>
            <th scope="col" style={{ width: 380, textAlign: "center" }}>
              Actions
            </th>
          </tr>
        </thead>

        {quotationDetails.map((id, i) => (
          <tbody>
            {id.isApproved === true &&
            id.isDeleted !== 2 &&
            id.isDeleted !== 4 ? (
              <tr>
                <th
                  scope="row"
                  style={{ textAlign: "center", fontSize: "16px" }}
                >
                  {"0" + (i + 1)}
                </th>
                <td style={{ textAlign: "center", fontSize: "17px" }}>
                  {id.type}
                </td>
                <td style={{ textAlign: "center", fontSize: "17px" }}>
                  {id.vehino}
                </td>
                <td>
                  <Link
                    to={{
                      pathname: "/viewQuotation",
                      state: id,
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="contained"
                      style={{ marginLeft: 5, color: grey }}
                    >
                      View
                    </Button>
                  </Link>
                  <Link
                    to={{
                      pathname: "/editQuotationForTheVehicle",
                      state: id,
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="contained"
                      style={{
                        marginLeft: 5,
                        backgroundColor: "#61CC63",
                        color: "#ffffff",
                      }}
                    >
                      Update
                    </Button>
                  </Link>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginLeft: 5 }}
                    onClick={deleteDetails.bind(this, id._id)}
                  >
                    Delete
                  </Button>

                  <Button
                    variant="contained"
                    style={{
                      marginLeft: 5,
                      color: "#ffffff",
                      backgroundColor: "#800080",
                    }}
                  >
                    Approved
                  </Button>
                </td>
              </tr>
            ) : null}
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default GetListOfApprovedQuotation;
