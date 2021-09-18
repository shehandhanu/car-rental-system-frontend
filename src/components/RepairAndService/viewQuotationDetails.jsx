import React, { useState, useEffect } from "react";
import "../RepairAndService/main.css";
import "../RepairAndService/main.min.css";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const ViewQuotation = (props) => {
  const [data, setData] = useState(props.location.state);
  console.log(data);

  return (
    <div class="page-wrapper bg-gra-03 p-t-45 p-b-50">
      <div class="wrapper" style={{ width: 700 }}>
        <div class="card card-5">
          <div class="card-heading">
            <h2 class="title">
              Quotation Details For The Vehicle Repair or Service
            </h2>
          </div>
          <div class="card-body">
            <div class="form-row  m-b-55">
              <div class="name">Repair/Service</div>
              <div class="value">
                <div class="input-group">
                  <input
                    class="input--style-5"
                    type="text"
                    name="company"
                    value={data.type}
                    disabled
                  ></input>
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="name">Vehicle No.</div>
              <div class="value">
                <div class="input-group">
                  <input
                    class="input--style-5"
                    type="text"
                    name="company"
                    value={data.vehino}
                    disabled
                  ></input>
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="name">Repair/Service Date</div>
              <div class="value">
                <div class="input-group">
                  <input
                    class="input--style-5"
                    type="text"
                    name="email"
                    value={data.serviceDate}
                    style={{ height: 50 }}
                    disabled
                  ></input>
                </div>
              </div>
            </div>
            <div class="form-row m-b-55">
              <Grid xs={2}>
                <div class="name">Repair/Service Parts</div>
              </Grid>
              <Grid xs={10}>
                <div>
                  {/* {parts.map((part, index) => ( */}
                  <div
                    class="row"
                    style={{ marginTop: 10, marginLeft: 25 }}
                    //key={index}
                  >
                    <div class="col-6">
                      <div class="input-group-desc">
                        <input
                          class="input--style-5"
                          name="item"
                          //value={part.item}
                          // onChange={(event) =>
                          //   handleChangeParts(index, event)
                          // }
                        ></input>
                        <label class="label--desc">Item</label>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="input-group-desc">
                        <input
                          class="input--style-5"
                          name="price"
                          type="number"
                          // value={part.price}
                          // onChange={(event) =>
                          //   handleChangeParts(index, event)
                          // }
                        ></input>
                        <label class="label--desc">Price</label>
                      </div>
                    </div>
                    {/* <div class="col-1">
                          <IconButton onClick={() => handleRemoveFields(index)}>
                            <RemoveIcon />
                          </IconButton>
                        </div>
                        <div class="col-1">
                          <IconButton onClick={() => handleAddFields()}>
                            <AddIcon />
                          </IconButton>
                        </div> */}
                  </div>
                  {/* ))} */}
                </div>
              </Grid>
            </div>
            <div class="form-row w-50">
              <div class="name">Total Price</div>
              <div class="value">
                <div class="input-group">
                  <input
                    class="input--style-5"
                    type="text"
                    disabled
                    value={data.totPrice}
                  ></input>
                </div>
              </div>
            </div>
            <div class="form-row m-b-55">
              <div class="name">Special Note</div>
              <div class="value">
                <div class="input-group">
                  <textarea
                    class="input--style-5 w-100"
                    type="partTextArea"
                    name="partTextArea"
                    disabled
                    value={data.specialNote}
                  ></textarea>
                </div>
              </div>
            </div>
            <div>
              <Link
                to={{
                  pathname: "/getListOfQuotationOwner",
                  // state: id,
                }}
              >
                <button class="btn btn--radius-2 btn--red" type="cancel">
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewQuotation;
