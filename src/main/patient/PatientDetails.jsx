import React,{useState} from "react";

import { clinicContext } from "../../data/dataProvider";
import { PatientOptions } from "./PatientOptions";
import { PatientInfo } from "./patientInfo/PatientInfo";
import { Appointment } from "./medicalRecords/Appointment";

function PatientDetails() {
  const { add, found}  = React.useContext(clinicContext);
  
  return (
   <React.Fragment>
     <section className="justify-content-center " >
      
      <PatientOptions/>
    </section>
    <section className="patientInfo">
    {add && <PatientInfo/>}
      {found && <React.Fragment>
        <PatientInfo/>
        <Appointment/>
        </React.Fragment>}
    </section>
   </React.Fragment>
  );
}
export {PatientDetails}