
import { useEffect, useState } from "react";

const url = 'http://localhost:8081/historial-clinico/v1/'
const persona = {
  "dpi": 545411,
  "gender": "M",
  "age": 3,
  "firstName": "Carlos",
  "middleName": "Noe",
  "lastName": "Lopez",
  "secLastName": "Gomez"
 
}

function useFetch(){
  
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null)
  const [method, setMethod] = useState("GET")
  const [body, setBody] = useState()
  const [found, setFound] = useState(false)
  
  async function fetchData() {
    try {
      if (query.length>0) {
        let response = await fetch (`${url}${query}`,{
          method,
          mode: 'cors',
          headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify(body)
      });
      
      if (response.status ===200 || response.status ===201) {
          const apiData = await response.json();
          setData(apiData);
          setFound(true)
      } else {
        let status = {
          url: `${url}${query}`,
          statud: response.status
        }
        setData(status);
        setFound(false)
      }
      }
    } catch (error) {
      setData(error);
      setFound(false)
  }
  }

  useEffect(() => {
    fetchData();
  },[query]);
  
return{
  data,
  setQuery,
  setMethod,
  setBody,
  found
}
}

export {useFetch}


