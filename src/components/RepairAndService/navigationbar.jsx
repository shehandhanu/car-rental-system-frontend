import React from "react";

export default class NavigationBar extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark h5 nav-tabs w-100 sticky-top">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <img
                  style={{ width: "200px", marginTop: 5 }}
                  src={require("../../assets/img/navbar-logo.png").default}
                  alt="Logo."
                />
              </li>
              <li class="nav-item active" style={{ marginLeft: 40 }}>
                <a class="nav-link" href="/getListReportOfFailure">
                  Report Of Failure
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/getListOfApprovedQuotation">
                  Approved Quotation
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/generateReport">
                  Genarate Report
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
