import "./App.css";
import Dashboard from "./components/Dashboard";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Patientsignin from "./components/PatientSignIn";
import Physiciansignin from "./components/Physiciansignin";
import Radiologistsignin from "./components/Radiologistsignin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index Component={Home} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/patientsignin" Component={Patientsignin} />
          <Route path="/physiciansignin" Component={Physiciansignin} />
          <Route path="/radiologistsignin" Component={Radiologistsignin} />
          <Route path="/signup" Component={Signup} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
