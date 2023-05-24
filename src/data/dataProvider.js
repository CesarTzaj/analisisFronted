import React, { createContext, useEffect, useState } from "react";

import { useFetch } from "../hooks/api/useFetch";
import { useLogin } from "../hooks/useLogin";
import { usePersonInfo } from "../hooks/useUpdate";
const clinicContext = createContext()

function DataPrivider({ children }) {
  const { data, setQuery, found } = useFetch()
  const [dpi, setDpi] = useState("");
  const [edit, setEdit] = useState(true);
  const [add, setAdd] = useState(false);
  

  const {
    login,
    setLogin,
    patient,
    setPatient,
  } = useLogin();

  

  const {
    nombre,
    setNombre,
  } = usePersonInfo();

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
      dpi,
      setDpi,
      found,
      edit, 
      setEdit,
      nombre,
      setNombre,
      add,
      setAdd
    }}
  >
    {children}
  </clinicContext.Provider>
}

export { DataPrivider, clinicContext }
