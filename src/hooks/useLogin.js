import  {useState} from "react";



function useLogin() {

  const [login, setLogin] = useState(true)
  const [patient, setPatient] = useState(true)
  


  return({
    login,
    setLogin,
    setPatient,
    patient,
    
  });
}
export {useLogin}

