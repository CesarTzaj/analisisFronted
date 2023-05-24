import React, { useContext } from "react";
import { clinicContext } from "../../data/dataProvider";


function PatientOptions() {

  const {
    dpi,
    setDpi,
    setQuery,
    setEdit,
    setAdd
  } = useContext(clinicContext);

  return (
    <ul className="userSearch mt-5 ">
      <li>
        <form
          className="d-flex"
          onSubmit={event => {

            event.preventDefault();
            setDpi(event.target.dpis.value)
          }} >
          <label htmlFor="search" className=" me-2 me-sm-5 ">DPI</label>
          <input
            className=" me-2 fs-1"
            id="search"
            type="number"
            placeholder="Search"
            aria-label="Search"
            value={dpi}
            name="dpis"
            onChange={event => {

              event.preventDefault();
              setDpi(event.target.value)
              console.log(dpi);
            }}
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={() => {
              setQuery(`person/${dpi}`)

            }}
          >Buscar</button>
        </form>
      </li>
      <li className="nav-item">
        <span
          className="material-symbols-outlined editPatient me-lg-4"
          onClick={() => {
            setEdit(false)
          }}
        >
          edit
        </span>
      </li>

      <li className="nav-item dropdown">
        <span 
        className="material-symbols-outlined add me-lg-4"
        onClick={() => {
          setEdit(false);
          setAdd(true)
        }}
        >
          add
        </span>
      </li>
      <li className="nav-item dropdown">

        <span className="material-symbols-outlined add me-lg-4"
          onClick={() => {
            setEdit(true)
          }}
        >
          save
        </span>
      </li>

      <li className="nav-item dropdown">

        <span className="material-symbols-outlined add me-lg-4"
          onClick={() => {
            setQuery(`person/${dpi}`);
            // setUpdate(true);
          }}
        >
          close
        </span>
      </li>
    </ul>

  );
}

export { PatientOptions }