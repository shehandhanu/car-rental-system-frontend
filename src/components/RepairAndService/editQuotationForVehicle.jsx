import React, { useState, useEffect } from "react";
import "../RepairAndService/main.css";
import "../RepairAndService/main.min.css";
// import "../RepairAndService/select2.min.css";
// import "../RepairAndService/font.css";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { useHistory } from "react-router";

const EditQuotationForTheVehicle = (props) => {
  const [parts, setParts] = useState([{ item: "", price: "" }]);
  const [quotationDetails, setQuotationDetails] = useState([]);
  const [data, setData] = useState(props.location.state);
  const [type, setType] = useState(props.location.state.type);
  const [vehino, setVehino] = useState(props.location.state.vehino);
  const [serviceDate, setServiceDate] = useState(
    props.location.state.serviceDate
  );
  const [items, setItems] = useState(props.location.state.items);
  const [totPrice, setTotPrice] = useState(props.location.state.totPrice);
  const [specialNote, setSpecialNote] = useState(
    props.location.state.specialNote
  );

  const history = useHistory();

  console.log(data);

  useEffect(() => {
    let tot = 0;

    if (parts.length !== 0) {
      parts.map((part) => {
        console.log(part.price);
        if (parseInt(part.price) !== null) {
          tot += parseInt(part.price);
        }
      });
    }
    setTotPrice(tot);
  }, [parts]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const details = {
      type: type,
      vehino: vehino,
      serviceDate: serviceDate,
      totPrice: totPrice,
      specialNote: specialNote,
      items: items,
    };

    console.log(details);

    axios
      .post(
        "http://localhost:4000/api/v1/service/updateQuotation/" + data._id,
        details
      )
      .then((Response) => {
        console.log(Response);
        alert("Update Successfully");
      })
      .catch((error) => {
        alert(error.message);
      });
    history.push("/getListOfQuotationOwner");
  };

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
            <h2 class="title">
              Edit Quotation For The Vehicle Repair or Service
            </h2>
          </div>
          <div class="card-body">
            <form method="POST" onSubmit={(handleSubmit, onSubmit)}>
              <div class="form-row  m-b-55">
                <div class="name">Repair/Service</div>
                <div class="value">
                  <div class="">
                    <div class="rs-select2 js-select-simple select--no-search">
                      <select
                        name="subject"
                        class="input--style-5 w-100"
                        style={{ height: 50 }}
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                      >
                        <option selected="selected" class="input--style-5">
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
                      value={vehino}
                      onChange={(e) => setVehino(e.target.value)}
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
                      value={serviceDate}
                      onChange={(e) => setServiceDate(e.target.value)}
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
                    {items.map((part, index) => (
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
                    <input
                      class="input--style-5"
                      type="text"
                      value={totPrice}
                      readonly
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
                      value={specialNote}
                      onChange={(e) => setSpecialNote(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div>
                <button
                  class="btn btn--radius-2 btn--red"
                  onClick={() => history.goBack()}
                >
                  Cancel
                </button>
                <button
                  class="btn btn--radius-2 btn-warning m-5"
                  type="submit"
                  //onClick={handleSubmit}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditQuotationForTheVehicle;
