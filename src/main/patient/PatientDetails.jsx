import React from "react";

import { clinicContext } from "../../data/dataProvider";
import { PatientOptions } from "./PatientOptions";
import { PatientInfo } from "./PatientInfo";

function PatientDetails() {
  const {patients, data, found}  = React.useContext(clinicContext);
  return (
   <React.Fragment>
     <section className="justify-content-center " >
      
      <PatientOptions/>
    </section>
    <section className="patientInfo">
      {found && <PatientInfo/>}
    </section>
    <section>
      {/* <MedicalRecord/> */}
    </section>
   </React.Fragment>
  );
}
export {PatientDetails}