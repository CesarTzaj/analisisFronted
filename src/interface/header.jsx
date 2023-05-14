import React from "react";
import { Images } from "../assets/index";
import {clinicContext} from "../data/dataProvider"


function Header() {
  const { logo } = Images();
  const { login, setLogin } = React.useContext(clinicContext);

  const [loginMenu, setLoginMenu] = React.useState(false);

  return (
    <React.Fragment>
      <header className="pb-2 pb-md-3">
        <nav className="container-md d-flex justify-content-between">
          <img src={logo} alt="logo" className="rounded-circle" />
          {!login && <h1 className="logo-title">Mi Historial</h1>}
          {login &&
            <ul className="account">
              <li onClick={() => setLoginMenu(!loginMenu)}>Bienvenido cesar
                {loginMenu &&
                  <ul className="accountOption">
                    <li>Pasientes</li>
                    <li>Perfil</li>
                    <li><button
                      className="logOut"
                      onClick={() => setLogin(!login)}>Cerrar sesi&oacute;n</button></li>
                  </ul>}

              </li>
            </ul>
          }

        </nav>
      </header>
      
    </React.Fragment>
  );
}

export { Header }