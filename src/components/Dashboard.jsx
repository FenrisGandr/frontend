import { useNavigate } from "react-router-dom";
import PortalNavBar from "./navbars/PortalNavBar.jsx";
import './navbars/PortalNavBar.css';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <PortalNavBar/>
      <h2>Dashboard</h2>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}

export default Dashboard;
