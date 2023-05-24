import React, { useContext } from "react";
import { clinicContext } from "../../../data/dataProvider";
import { Phonenumber } from "./phoneNumber";
function PatientInfo() {

  const {
    data,
    edit,
    nombre,
    setNombre,
    add,
  } = useContext(clinicContext);


  return (
    <React.Fragment>
      <h1>Paciente</h1>
      <ul className="patientInfoUl">
        <li>
          <h2>Nombre</h2>
          <input type="text"
            onChange={(event)=>{
              setNombre(event.target.value)
            }}
            value={nombre}
            readOnly={edit}
          />
        </li>
        <li>
          <h2>Edad</h2>
          <input
            type="number"
            value={data?.age}
            readOnly={edit}
          />
        </li>
        <li>
          <h2>DPI</h2>
          <input
            type="number"
            value={data?.dpi}
            readOnly={edit}
          />

        </li>
        <li>
          <h2>Genero</h2>
          <input
            type="text"
            value={data?.gender}
            readOnly={edit} />
        </li>
        <li>
          <h2>Telefono</h2>
          <ul>
            {!add && data?.phoneNumbers.map((tel) => {
              
              return (
               <Phonenumber
               key={tel?.id}
               a="a"
               tel ={tel?.phoneNumber}/>
              )
            })}
            {add && <h1><input type="number" value={"adj;lajsd;lfajsd"} /></h1>}
          </ul>
        </li>
        <li className="address">
          <h2>Direccion</h2>
          <ul>
            {data?.addresses.map((address) => {
              return (
                <li key={address.id}>
                  <input
                    type="text"
                    value={address?.address}
                    readOnly={edit} />
                </li>
              )
            })}
          </ul>
        </li>
        <li className="email">
          <h2>email</h2>
          <ul >
            {data?.emails?.map((email) => {
              console.log(email?.id);
              return (
                <li key={email?.id}>
                  <input
                    type="email"
                    value={email?.email}
                    readOnly={edit} />
                </li>
              )
            })}
          </ul>
        </li>
      </ul>
    </React.Fragment>
  );
}

export { PatientInfo }
