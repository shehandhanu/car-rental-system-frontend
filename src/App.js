import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EmInsertion from "../src/components/Employee/EmployeeInsertion/EmployeeInsertion";
import ReIsue from "../src/components/Employee/ReportIssues/ReportIssues";
import AdminHome from "../src/components/Employee/AdminHome/AdminHome";
import EmployeeHome from "../src/components/Employee/EmployeeHome/EmployeeHome";
import EmpUserProfile from "../src/components/Employee/UserProfile/UserProfile";
import EmployeeUpdate from "../src/components/Employee/EmployeeUpdate/EmployeeUpdate";
import EmployeeList from "./components/Employee/EmployeeList/EmployeeList";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/Sign In/SignIn";
import SignUp from "./components/Sign Up/SignUp";
import EmailConfirmation from "./components/User/EmailConfirmation";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ForgotPasswordEmail from "./components/ForgotPassword/ForgotPasswordEmail";
import ChangePassword from "./components/PasswordChange/PasswordChange";
import UserProfile from "./components/User/UserProfile";
import UserProfileUpdate from "./components/User/UserProfileUpdate";
import UserReport from "./components/User/UserReport";
import TripHistory from "./components/User/TripHistory/TripHistory";
import Payment from "./components/Payments/Payment";
import CarList from "./components/CarSelection/CarList";
import CarCheckout from "./components/CarSelection/CarReservation/CarReservation";
import CreateReportOfService from "./components/RepairAndService/createReportOfService";
import GetListOfApprovedQuotation from "./components/RepairAndService/getListOfApprovedQuotation";
import tableDeails from "./components/RepairAndService/table";
import GetListOfQuotationOwner from "./components/RepairAndService/getListViewOfQuotationOwner";
import GetListReportOfFailure from "./components/RepairAndService/getListReportOfFailure";
import QuotationForTheVehicle from "./components/RepairAndService/quotationForVehicle";
import GenerateReport from "./components/RepairAndService/generateReport";
import EditQuotationForTheVehicle from "./components/RepairAndService/editQuotationForVehicle";
import ViewQuotation from "./components/RepairAndService/viewQuotationDetails";


function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/employeeinsert" component={EmInsertion} exact />
      <Route path="/reportvehicleissue" component={ReIsue} exact />
      <Route path="/adminhome" component={AdminHome} exact />
      <Route path="/employeehome" component={EmployeeHome} exact />
      <Route path="/employeeupdate" component={EmployeeUpdate} exact />
      <Route path="/userprofile" component={EmpUserProfile} exact />
      <Route path="/employeelist" component={EmployeeList} exact />

      <Route path="/forgotpassword" component={ForgotPassword} exact />
      <Route
        path="/forgotpasswordemail"
        component={ForgotPasswordEmail}
        exact
      />
      <Route path="/changepassword/:token" component={ChangePassword} exact />
      <Route path="/signin" component={SignIn} exact />
      <Route path="/signup" component={SignUp} exact />
      <Route path="/profile" component={UserProfile} exact />
      <Route path="/userreport" component={UserReport} exact />
      <Route path="/userhistory" component={TripHistory} exact />
      <Route path="/payment" component={Payment} exact />
      <Route path="/profileupdate" component={UserProfileUpdate} exact />
      <Route path="/carlist" component={CarList} exact />
      <Route path="/carcheckout" component={CarCheckout} exact />
      <Route path="/confirmation/:token" component={EmailConfirmation} exact />
      <Route
        path="/createReportOfService"
        component={CreateReportOfService}
        exact
      />
      <Route
        path="/getListOfApprovedQuotation"
        component={GetListOfApprovedQuotation}
        exact
      />
      <Route path="/tableDeails" component={tableDeails} exact></Route>
      <Route
        path="/getListOfQuotationOwner"
        component={GetListOfQuotationOwner}
        exact
      />
      <Route
        path="/getListReportOfFailure"
        component={GetListReportOfFailure}
        exact
      />
      <Route
        path="/quotationForTheVehicle"
        component={QuotationForTheVehicle}
        exact
      />
      <Route path="/generateReport" component={GenerateReport} exact></Route>
      <Route path="/viewQuotation" component={ViewQuotation} exact></Route>
      <Route
        path="/editQuotationForTheVehicle"
        component={EditQuotationForTheVehicle}
        exact
      />

      <Footer />
    </Router>
  );
}

export default App;
