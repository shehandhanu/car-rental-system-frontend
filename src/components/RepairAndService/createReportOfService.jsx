import React from "react";
import "../RepairAndService/main.css";
import "../RepairAndService/main.min.css";
import axios from "axios";
import { useState } from "react";

const CreateReportOfService = () => {
  const [type, setType] = useState("");
  const [vehino, setVehino] = useState("");
  const [serviceDate, setServiceDate] = useState("");
  const [serviceParts, setServiceParts] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const details = {
      type: type,
      vehino: vehino,
      serviceDate: serviceDate,
      serviceParts: serviceParts,
    };

    axios
      .post(
        "https://car-rentalsystem-backend.herokuapp.com/api/v1/service/reportOfServiceRepair",
        details
      )
      .then((Response) => {
        alert("vehicle Added Successfully");
      })
      .catch((error) => {
        alert(error.message);
      });
    setType("");
    setVehino("");
    setServiceDate("");
    setServiceParts("");
  };

  return (
    <div class="page-wrapper bg-gra-03 p-t-45 p-b-50">
      <div class="wrapper wrapper--w790">
        <div class="card card-5">
          <div class="card-heading">
            <h2 class="title">Report of failure or service in a vehicle</h2>
          </div>
          <div class="card-body">
            <form method="POST" onSubmit={onSubmit}>
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
                        <option>Choose option</option>
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
                      required
                      class="input--style-5"
                      type="text"
                      name="vehino"
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
                      name="date"
                      style={{ height: 50 }}
                      value={serviceDate}
                      onChange={(e) => setServiceDate(e.target.value)}
                    ></input>
                  </div>
                </div>
              </div>
              <div class="form-row m-b-55">
                <div class="name">Repair/Service Parts</div>
                <div class="value">
                  <div class="input-group">
                    <textarea
                      class="input--style-5 w-100"
                      type="text"
                      name="parts"
                      value={serviceParts}
                      onChange={(e) => setServiceParts(e.target.value)}
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
                  value="Submit"
                >
                  Inform
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateReportOfService;
