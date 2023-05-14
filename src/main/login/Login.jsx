import React from "react";
import { clinicContext } from "../../data/dataProvider";


function Login() {
  
  const {setLogin, login} = React.useContext(clinicContext)

  return (
    <React.Fragment>
     <section className={`log-in-section `}>
        <h1>Iniciar sesi&oacute;n</h1>
        <form action="" className="form-log-in">
          <label htmlFor="email"> Correo electr&oacute;nico </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border border-primary rounded-3 fs-1"
          />
          <label htmlFor="password">Contrase&ntilde;a</label>
          <input
            type="password"
            name="password"
            id="password"
            className="border border-primary rounded-3 fs-1"
          />
        </form>
        (<button
              type="button"
              className="btn-log-in mt-2 "
              onClick={() => {
                setLogin(!login);
              }}
            >
              Iniciar Sesion
            </button>
          )
          </section>
    </React.Fragment>
  );
}

export { Login };
