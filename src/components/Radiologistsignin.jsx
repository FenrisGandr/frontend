import Signin from "./Signin";
import './SigninPortals.css'
import RadioArchiveLogo from '../assets/RadioArchiveLogo.png'
function Radiologistsignin () {

    const radiologistSpan = {
        color: '#DC3545',
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
                <span style={radiologistSpan}>Radiologist</span>Portal
            </h2>
            <Signin />
            <div className="option">
                    <a onClick={() => navigate("/signup")}>New User?</a>
                    <button><a onClick={() => navigate("/signup")}>Sign Up</a></button>
            </div>
        </div>
    </div>
    );
}

export default Radiologistsignin;