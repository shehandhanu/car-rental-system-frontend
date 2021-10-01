import React, { useState, useEffect } from "react";
import "../RepairAndService/main.css";
import "../RepairAndService/main.min.css";
// import "../RepairAndService/select2.min.css";
// import "../RepairAndService/font.css";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import axios from "axios";

const GenerateReport = () => {
  const [reportUrl, setReportUrl] = useState("");

  useEffect(() => {}, [reportUrl]);

  const getReportDetails = () => {
    console.log("hello");
    axios
      .get("http://localhost:4000/api/v1/service/generateReport")
      .then((Response) => {
        setReportUrl(Response.data.response);
        alert("Generate Report Successfully");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div class="page-wrapper bg-gra-03 p-t-45 p-b-50">
      <div class="wrapper wrapper--w960">
        <div class="card card-5">
          <div class="card-heading">
            <h2 class="title">Generate Report</h2>
          </div>
          <div class="card-body">
            <div>
              <button
                class="btn btn--radius-2 btn-warning"
                onClick={() => getReportDetails()}
              >
                Generate
              </button>
            </div>

            <Grid className="mt-5 w-100">
              <div>
                <iframe
                  style={{ width: "100%", height: "900px" }}
                  src={reportUrl}
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
