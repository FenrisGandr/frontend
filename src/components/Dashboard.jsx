import { useNavigate } from "react-router-dom";
import PortalNavBar from "./navbars/PortalNavBar.jsx";
import './navbars/PortalNavBar.css';
import PortalCenter from "./dashboard components/PortalCenter.jsx";
import WebFooter from "./WebFooter.jsx"
import GreetingCard from "./dashboard components/GreetingCard.jsx";
function Dashboard() {
  const navigate = useNavigate();

  const PortalCenterDiv ={
    display: 'flex',
    flexDirection: 'column',
  }
  return (
    //title names and title colors are fillers we could determine what the title color is based off of the context
    <div>
      <PortalNavBar title={"title name"} titleColor={'#479F76'}/>
      <GreetingCard title={"patient"} name= {"john"} lastName={"Doe"}/>
      <div style={PortalCenterDiv}>
      <PortalCenter/>
      </div>
      <WebFooter/>
    </div>
  );
}

export default Dashboard;
