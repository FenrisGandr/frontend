import "./App.css";
import Dashboard from "./components/Dashboard";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={Home} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/signin" Component={Signin} />
        <Route path="/signup" Component={Signup} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
