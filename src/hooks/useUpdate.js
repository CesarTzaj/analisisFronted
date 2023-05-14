import { useContext, useState } from "react";
import { clinicContext } from "../data/dataProvider";
function useUpdate() {
  const [nombre, setNombre] = useState('');

  return{ 
    nombre, 
    setNombre,

  }

}

export {useUpdate}