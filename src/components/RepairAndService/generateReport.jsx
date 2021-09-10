import React from "react";
import "../RepairAndService/main.css";
import "../RepairAndService/main.min.css";
// import "../RepairAndService/select2.min.css";
// import "../RepairAndService/font.css";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const GenerateReport = () => {
  return (
    <div class="page-wrapper bg-gra-03 p-t-45 p-b-50">
      <div class="wrapper wrapper--w960">
        <div class="card card-5">
          <div class="card-heading">
            <h2 class="title">Generate Report</h2>
          </div>
          <div class="card-body">
            <form method="POST">
              <div class="form-row">
                <div class="name">Start Date</div>
                <div class="value">
                  <div class="input-group">
                    <input
                      class="input--style-5 w-50"
                      type="date"
                      name="email"
                      style={{ height: 50 }}
                    ></input>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="name">End Date</div>
                <div class="value">
                  <div class="input-group">
                    <input
                      class="input--style-5 w-50"
                      type="date"
                      name="email"
                      style={{ height: 50 }}
                    ></input>
                  </div>
                </div>
              </div>
              <div>
                <button class="btn btn--radius-2 btn-warning" type="submit">
                  Generate
                </button>
              </div>
            </form>
            <Grid className="mt-5 w-100">
              <div>
                <iframe
                  style={{ width: "100%", height: "900px" }}
                  src="https://res.cloudinary.com/dxz8wbaqv/image/upload/v1629560529/SPM%20Project/Danuka/No_ghs2jv.pdf"
                  type="application/pdf"
                  title="title"
                ></iframe>
              </div>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateReport;
