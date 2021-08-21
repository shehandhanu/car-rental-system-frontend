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
       {/* <EmInsertion />  */}
      {/* <Footer /> */}
      {/* <ReIsue/> */}
      <Route path="/adminhome" component={AdminHome} exact />
      {/* <EmployeeHome/> */}
      {/* <EmployeeUpdate/> */}
      {/* <UserProfile/> */}
      <EmployeeList />
     </div>
    </Router>
  );
}

export default App;
