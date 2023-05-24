import React,{useContext, useState} from "react";
import { clinicContext } from "../../../data/dataProvider";

export function Phonenumber({tel}) {
  
  const {edit} = useContext(clinicContext);
  
  
  return(
    <li >
    <input
      type="number"
      value={tel}
      readOnly={edit} 
      onClick={()=>{
        alert(tel)
      }}
      />
      
  </li>
  )
}