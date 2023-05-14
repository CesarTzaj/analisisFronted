import  {useState} from "react";


const patients = [
  {
   dpi: 32322342342,
   genero: "masculino",
   name: "cesar Gabriel",
   apellido: "Tzaj Gonzales",
    edad: 23,
   tel:[ '2345 -2323', '2323-2342', '234-22234'],
   direccion: ["4 calle 10-61 zona 8 Guatemala", "4 calle 10-61 zona 9 Guatemala"],
  
   expediente: [{
    cita: {
      citaID: 2323423,
      fecha: "12/1/2019",
      hora: "12:59",
      consulta: [
        {
          id: 1,
          docotorId: "Gabriel C", 
          tipoConsulta: "General",
          consulta: "Dolor de cabeza", 
          receta: ["Amoxicilina 50mg", "Analgesico"],
          laboratorio: ["Examen de sangre", "Toma de precion"]
        },
        {
          docotorId: "Antonio C", 
          tipoConsulta: "General",
          consulta: "Dolor de cabeza", 
          receta: ["Amoxicilina 50mg", "Analgesico"],
          laboratorio: ["Examen de sangre", "Toma de precion"]
        },
      ]
    }
   },
   {
    cita: {
      citaID: 54654654,
      fecha: "12/1/2020",
      hora: "12:59",
      consulta: [
        {
          docotorId: "Maximo C", 
          tipoConsulta: "Dolor de estomago",
          consulta: "Dolor de cabeza", 
          receta: ["Analgesico 50mg", "Desparacitante"],
          laboratorio: ["Examen de sangre", "Toma de precion"]
        },
      ]
    }
   }
   ],
   nit: 23242, 
   correo: ["cesar.tzaj@rokectmail.com", "paciente@gmail.com"],
 },


 {
   dpi: 32322342342,
   genero: "Femenino",
   name: "Fernanda",
   apellido: "Gonzalez",
   tel:[ 2342323, 23232342, 23422234],
   direccion: ["4 calle 10-61 zona 8 Guatemala", "4 calle 10-61 zona 9 Guatemala"],
   cita: [
     {

       citaID: 2323423,
       fecha: "23/2/2023",
       hora: "12:50",
       docotorId: 2323242,        
     },
     {
       citaID: 2323423,
       fecha: "23/2/2023",
       hora: "12:50",
       docotorId: 232423423,        
     },
     {
       citaID: 2323423,
       fecha: "23/2/2023",
       hora: "12:50",
       docotorId: 232423423,        
     },
   ] ,
   nit: 23242, 
   correo: ["prueva@rokectmail.com", "paciente@gmail.com"],
 },
 
];

function useLogin() {

  const [login, setLogin] = useState(true)
  const [patient, setPatient] = useState(true)
  


  return({
    login,
    setLogin,
    setPatient,
    patient,
    patients,
  });
}
export {useLogin}

