import Signin from "./Signin";
import './SigninPortals.css'
import { useNavigate } from "react-router-dom";
import RadioArchiveLogo from '../assets/RadioArchiveLogo.png'
function Physiciansignin () {
    const navigate = useNavigate();
    
    const physicianSpan = {
        color: '#0D6EFD',
        paddingRight: '5px',
    }
    
    return (
        <div className="signinWrapper">
            <div className="signinContainer">
                <form className="form">
                    <div className="form-row">
                        <h1>
                            <img src={RadioArchiveLogo} /> 
                            <span className='titleSpans' id = "radiology">Radiology</span>
                            <span className='titleSpans' id ="archive">Archive</span>
                        </h1>
                    </div>
                </form>
                <h2 className="userType">
                    <span style={physicianSpan}>Physician</span>Portal
                </h2>
                <Signin />
                <div className="option">
                        <a onClick={() => navigate("/signup")}>New User?</a>
                        <a onClick={() => navigate("/signup")}><button>Sign Up</button></a>
                </div>
            </div>
        </div>
    );
}

export default Physiciansignin;