import React ,{useContext, useState} from "react";
import { clinicContext } from "../../data/dataProvider";
import { useUpdate } from "../../hooks/useUpdate";
import { useExpediente } from "../../hooks/historialClinico/useExpediente";
function PatientInfo() {
  const {sangre, setSangre} = useExpediente();
  const {
    data,
    update,
    nombre,
    setNombre,
  }  = useContext(clinicContext);
  
  
  return (
    <React.Fragment>
      <h2>{sangre}</h2>
      
      <h1>Paciente</h1>
      <ul className="patientInfoUl">
      <li>
        <h2>Nombre</h2>
        <input type="text" 
        value={nombre}
        onChange={(event)=>{
          setNombre(event.target.value)
        }}
        readOnly={update}
        />
      </li>
      <li>
        <h2>Edad</h2>
        <p>{data?.age}</p>
      </li>
      <li>
        <h2>DPI</h2> 
        <p>{data?.dpi}</p>
      </li>
      <li>
        <h2>Genero</h2>
        <p>{data?.gender}</p>
      </li>
      <li>
        <h2>Telefono</h2>
        <ul>
          {data?.phoneNumbers.map((tel)=> {
            return(
              <li key={tel?.id}>{tel?.phoneNumber} </li>
            )
          })}
        </ul>
      </li>
      <li className="address">
        <h2>Direccion</h2>
        <ul>
          {data?.addresses.map((address)=> {
            return(
              <li key={address.id}>{address.address},  </li>
            )
          })}
        </ul>
      </li>
      <li className="email">
        <h2>email</h2>
        <ul >
          {data.emails.map((email)=> {
            return(
              <li key={email.id}>{email.email}  </li>
            )
          })}
        </ul>
      </li>
      </ul>
    </React.Fragment>
  );
}

export {PatientInfo}
