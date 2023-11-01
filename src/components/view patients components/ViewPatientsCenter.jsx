import React from "react"
import patient1 from '../../assets/person.png';
import patient2 from '../../assets/spine-xray.png';
import ViewPatientsSection from "./ViewPatientsSection";
import { API_URL } from "../../constants";
import { useAuth } from "../../contexts/AuthContext";

function ViewPatientsCenter(){
    const { user } = useAuth();
    const [patients, setPatients] = React.useState([]);
    React.useEffect(() => {
        const getPatients = async () => {
          const response = await fetch(`${API_URL}/api/user/patients`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + user.accessToken,
            },
          });
          const data = await response.json();
          setPatients(data.patients);
        };
        getPatients();
      }, []);

    return patients.map((patient) =>{
        return(
            <ViewPatientsSection
                key={patient.uid}
                profileImage={patient.profile_image_url}
                patientName={patient.first_name + " " + patient.last_name}
                patientEmail={patient.email}
                dob={patient.dob}
                additionalText={patient.images}
            />
        )

    })
};

export default ViewPatientsCenter;
