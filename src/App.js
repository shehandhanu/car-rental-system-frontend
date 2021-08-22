import "./App.css";
import Header from "../src/components/Header/Header";
import Home from "../src/components/Home/Home";
import Footer from "../src/components/Footer/Footer";
import VehicleRegistration from "./components/Vehicle/VehicleRegistration";
import OwnerRegistration from "./components/Vehicle/OwnerRegistration";
import VehicleInformation from "./components/Vehicle/VehicleInformation";
import OwnerInformation from "./components/Vehicle/OwnerInformation";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      {/* <VehicleRegistration /> */}
      {/* <OwnerRegistration /> */}
      {/* <VehicleInformation /> */}
      <OwnerInformation />
      <Footer />
    </div>
  );
}

export default App;
