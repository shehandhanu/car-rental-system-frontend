import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from '../src/components/Header/Header'
import Home from '../src/components/Home/Home'
import Footer from '../src/components/Footer/Footer'
import EmInsertion from '../src/components/Employee/EmployeeInsertion/EmployeeInsertion'
import ReIsue from '../src/components/Employee/ReportIssues/ReportIssues'
import AdminHome from '../src/components/Employee/AdminHome/AdminHome'
import EmployeeHome from '../src/components/Employee/EmployeeHome/EmployeeHome'
import UserProfile from '../src/components/Employee/UserProfile/UserProfile'
import EmployeeUpdate from '../src/components/Employee/EmployeeUpdate/EmployeeUpdate'
import EmployeeList from './components/Employee/EmployeeList/EmployeeList'

function App() {
  return (
    <Router>
      <div className="App">
       {/* <Header /> */}
      {/* <Home />  */}
      <Route path="/employeeinsert" component={EmInsertion} exact />  
      {/* <Footer /> */}
     <Route path="/reportvehicleissue" component={ReIsue} exact /> 
      <Route path="/adminhome" component={AdminHome} exact />
      <Route path="/employeehome" component={EmployeeHome} exact/>
      <Route path="/employeeupdate" component={EmployeeUpdate} exact/>
      <Route path ="/userprofile" component={UserProfile} exact /> 
      <Route path = "/employeelist" component={EmployeeList} exact  />
     </div>
    </Router>
  );
}

export default App;
