import { useState } from "react";

function usePersonInfo() {
  const [nombre, setNombre] = useState('');

  return{ 
    nombre, 
    setNombre,

  }

}

export {usePersonInfo}