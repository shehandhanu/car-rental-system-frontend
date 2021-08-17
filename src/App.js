import './App.css';
import Header from '../src/components/Header/Header'
import Home from '../src/components/Home/Home'
import Footer from '../src/components/Footer/Footer'
import EmInsertion from '../src/components/Employee/EmployeeInsertion/EmployeeInsertion'
import ReIsue from '../src/components/Employee/ReportIssues/ReportIssues'
import AdminHome from '../src/components/Employee/AdminHome/AdminHome'

function App() {
  return (
    <div className="App">
       {/* <Header /> */}
      {/* <Home />  */}
       {/* <EmInsertion />  */}
      {/* <Footer /> */}
      {/* <ReIsue/> */}
      <AdminHome/>
    </div>
  );
}

export default App;
