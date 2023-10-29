import React from "react"
import patient1 from '../../assets/person.png';
import patient2 from '../../assets/spine-xray.png';
import ViewPatientsSection from "./ViewPatientsSection";

function ViewPatientsCenter(){
    const patients = [
        {
            profileImage: patient1,
            patientName: "John Doe",
            patientEmail:"JohnDoe@email.com",
            dob:"01/01/1999",
            additionalText:[ patient2],
        },
        {
            profileImage: patient1,
            patientName: "Juan Dii",
            patientEmail:"JuanDii@gmail.com",
            dob:"01/01/1980",
            additionalText:[ "[No Images Avaliable]"],
        },
        {
            profileImage: patient1,
            patientName: "Jil Daw",
            patientEmail:"Jil Daw@email.com",
            dob:"03/03/1930",
            additionalText:["[No Images Avaliable]"],
        },
    ]
    return patients.map((item,index) =>{
        return(
            <ViewPatientsSection 
                profileImage={item.profileImage}
                patientName={item.patientName}
                patientEmail={item.patientEmail}
                dob={item.dob}
                additionalText={item.additionalText}

            />
        )
        
    })
};

export default ViewPatientsCenter;