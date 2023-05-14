import { useContext, useState } from "react";
import { clinicContext } from "../../data/dataProvider";
export function useExpediente() {
  const {data} = useContext(clinicContext);
  const [sangre, setSangre] = useState(data?.medicalRecordDTO?.bloodTypeDTO?.blood)
  console.log(data);
  return{ sangre, setSangre}
}