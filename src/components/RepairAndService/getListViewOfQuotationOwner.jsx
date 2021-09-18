import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { green, grey, purple } from "@material-ui/core/colors";
import axios from "axios";
import Dialog from "@material/react-dialog";
import { DialogTitle } from "@material/react-dialog";
import { DialogContent } from "@material/react-dialog";
import { DialogActions } from "@material-ui/core";
import { DialogContentText } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

// const initialState = {
//   quotationDetails: [],
// };

const GetListOfQuotationOwner = () => {
  const [showModal, setShowModal] = useState(false);
  const [quotationDetails, setQuotationDetails] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    //super(props);
    //state = initialState;
    axios
      .get("http://localhost:4000/api/v1/service/getListOfQuotations")
      .then((Response) => {
        console.log(Response.data);
        setQuotationDetails(Response.data.quotationOfService);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [!quotationDetails]);

  const deleteDetails = (id) => {
    axios
      .delete("http://localhost:4000/api/v1/service/deleteQuotations/" + id)
      .then((response) => {
        if (response.data != null) {
          alert("Quotation Details Deleted");
          this.setState({
            quotationDetails: this.state.quotationDetails.filter(
              (detail) => detail._id !== id
            ),
          });
        }
      });
  };

  const openModal = (id) => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="w-75 mx-auto mt-5">
      <Typography
        variant="h2"
        gutterBottom
        color="textSecondary"
        display="block"
      >
        <Box color="primary.main">List Of Quotations</Box>
      </Typography>
      <table class="table table-striped table-bordered table-hover">
        <thead class="thead-dark">
          <tr className="table-dark">
            <th scope="col" style={{ textAlign: "center" }}>
              No.
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
            {id.isQutationCreated === true ? (
              <tr>
                <th scope="row" style={{ textAlign: "center" }}>
                  {i + 1}
                </th>
                <td style={{ textAlign: "center" }}>{id.type}</td>
                <td style={{ textAlign: "center" }}>{id.vehino}</td>
                <td>
                  <Link
                    to={{
                      pathname: "/viewQuotation",
                      state: id,
                    }}
                  >
                    <Button
                      variant="contained"
                      onClick={openModal}
                      style={{ marginLeft: 5, color: grey }}
                    >
                      View
                    </Button>
                  </Link>
                  <Button
                    variant="contained"
                    //onClick={() => this.ischecked(id)}
                    style={{
                      marginLeft: 5,
                      backgroundColor: "#61CC63",
                      color: "#ffffff",
                    }}
                  >
                    Update
                  </Button>
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
            ) : null}
          </tbody>
        ))}
      </table>
      {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
    </div>
  );
};

export default GetListOfQuotationOwner;
