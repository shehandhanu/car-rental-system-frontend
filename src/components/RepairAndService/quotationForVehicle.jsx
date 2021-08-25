import React, { useState } from "react";
import "../RepairAndService/main.css";
import "../RepairAndService/main.min.css";
// import "../RepairAndService/select2.min.css";
// import "../RepairAndService/font.css";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";

const QuotationForTheVehicle = () => {
  const [parts, setParts] = useState([{ item: "", price: "" }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Parts: ", parts);
  };

  const handleChangeParts = (index, event) => {
    // console.log(index, event.target.name);
    const values = [...parts];
    values[index][event.target.name] = event.target.value;
    setParts(values);
  };

  const handleAddFields = () => {
    setParts([...parts, { item: "", price: "" }]);
  };

  const handleRemoveFields = (index) => {
    const values = [...parts];
    values.splice(index, 1);
    setParts(values);
  };

  return (
    <div class="page-wrapper bg-gra-03 p-t-45 p-b-50">
      <div class="wrapper wrapper--w960">
        <div class="card card-5">
          <div class="card-heading">
            <h2 class="title">Quotation For The Vehicle Repair or Service</h2>
          </div>
          <div class="card-body">
            <form method="POST" onSubmit={handleSubmit}>
              <div class="form-row  m-b-55">
                <div class="name">Repair/Service</div>
                <div class="value">
                  <div class="">
                    <div class="rs-select2 js-select-simple select--no-search">
                      <select
                        name="subject"
                        class="input--style-5 w-100"
                        style={{ height: 50 }}
                      >
                        <option
                          disabled="disabled"
                          selected="selected"
                          class="input--style-5"
                        >
                          Choose option
                        </option>
                        <option>Repair</option>
                        <option>Service</option>
                      </select>
                      <div class="select-dropdown"></div>
                    </div>
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
                      type="date"
                      name="email"
                      style={{ height: 50 }}
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
                    {parts.map((part, index) => (
                      <div
                        class="row"
                        style={{ marginTop: 10, marginLeft: 2 }}
                        key={index}
                      >
                        <div class="col-5">
                          <div class="input-group-desc">
                            <input
                              class="input--style-5"
                              name="item"
                              value={part.item}
                              onChange={(event) =>
                                handleChangeParts(index, event)
                              }
                            ></input>
                            <label class="label--desc">Item</label>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="input-group-desc">
                            <input
                              class="input--style-5"
                              name="price"
                              value={part.price}
                              onChange={(event) =>
                                handleChangeParts(index, event)
                              }
                            ></input>
                            <label class="label--desc">Price</label>
                          </div>
                        </div>
                        <div class="col-1">
                          <IconButton onClick={() => handleRemoveFields(index)}>
                            <RemoveIcon />
                          </IconButton>
                        </div>
                        <div class="col-1">
                          <IconButton onClick={() => handleAddFields()}>
                            <AddIcon />
                          </IconButton>
                        </div>
                      </div>
                    ))}
                  </div>
                </Grid>
              </div>
              <div class="form-row w-50">
                <div class="name">Total Price</div>
                <div class="value">
                  <div class="input-group" readonly>
                    {/* <input class="input--style-5" type="text" readonly></input> */}
                    <div class="input--style-5" readonly>
                      Total Price
                    </div>
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
                    ></textarea>
                  </div>
                </div>
              </div>

              <div>
                <button class="btn btn--radius-2 btn--red" type="submit">
                  Cancel
                </button>
                <button
                  class="btn btn--radius-2 btn-warning m-5"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotationForTheVehicle;
