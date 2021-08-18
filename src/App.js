import './App.css';
import Header from '../src/components/Header/Header'
import Home from '../src/components/Home/Home'
import Footer from '../src/components/Footer/Footer'
import EmInsertion from '../src/components/Employee/EmployeeInsertion/EmployeeInsertion'
import ReIsue from '../src/components/Employee/ReportIssues/ReportIssues'
import AdminHome from '../src/components/Employee/AdminHome/AdminHome'
import EmployeeHome from '../src/components/Employee/EmployeeHome/EmployeeHome'
import UserProfile from '../src/components/Employee/UserProfile/UserProfile'
import EmployeeUpdate from '../src/components/Employee/EmployeeUpdate/EmployeeUpdate'

function App() {
  return (
    <div className="App">
       {/* <Header /> */}
      {/* <Home />  */}
       {/* <EmInsertion />  */}
      {/* <Footer /> */}
      {/* <ReIsue/> */}
      {/* <AdminHome/> */}
      {/* <EmployeeHome/> */}
      <EmployeeUpdate/>
      {/* <UserProfile/> */}
    </div>
  );
}

export default App;
