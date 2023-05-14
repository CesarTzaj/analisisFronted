import React,{useContext} from "react";
import { Login } from "../main/login/Login";
import { PatientDetails } from "../main/patient/PatientDetails";
import { clinicContext } from "../data/dataProvider";

function Main() {
  const {login, patient} = useContext(clinicContext);
  return (
    <React.Fragment>
      <main className=" container-fluid ">
        {!login && <Login></Login>}
        {login && <section className="  ">
          {patient && <PatientDetails />}
          {/* {!patient && <ProfileDetails />} */}
        </section>}

      </main>
    </React.Fragment>
  );
}

export {Main}