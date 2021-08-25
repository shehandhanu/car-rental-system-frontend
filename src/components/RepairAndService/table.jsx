import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const tableDeails = () => {
  return (
    <div class="mt-5 w-75 container">
      <Typography
        variant="h2"
        gutterBottom
        color="textSecondary"
        display="block"
      >
        Approved quotation fo the vehicle repair or service
      </Typography>
      <table class="table table-bordered table-hover">
        <thead class="thead-dark">
          <tr class="bg-dark text-white">
            <th scope="col">No.</th>
            <th scope="col">Failure/Service</th>
            <th scope="col">Vehicle No.</th>
            <th scope="col" class="w-25">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <Button variant="contained">View</Button>
              <Button variant="contained" color="primary">
                Update
              </Button>
              <Button variant="contained" color="secondary">
                Delete
              </Button>
              <Button variant="contained" color="primary">
                Approved
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default tableDeails;
