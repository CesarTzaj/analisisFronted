import React, { createContext, useEffect, useState } from "react";

import { useFetch } from "../hooks/useFetch";
import { useLogin } from "../hooks/useLogin";
import { useUpdate } from "../hooks/useUpdate";
const clinicContext = createContext()

function DataPrivider({ children }) {
  const { data, setQuery, found } = useFetch()
  const [dpi, setDpi] = useState("4564");
  const [update, setUpdate] = useState(true);

  

  const {
    login,
    setLogin,
    patient,
    setPatient,
    patients,

  } = useLogin();

  

  const {
    nombre,
    setNombre,

  } = useUpdate();

  useEffect(()=>{
    if (data !=null) {
      setNombre(data?.firstName)
    }
  },[data])

  return <clinicContext.Provider
    value={{
      data,
      setQuery,
      login,
      setLogin,
      patient,
      setPatient,
      patients,
      dpi,
      setDpi,
      found,
      update, 
      setUpdate,
      nombre,
      setNombre,

    }}
  >
    {children}
  </clinicContext.Provider>
}

export { DataPrivider, clinicContext }
