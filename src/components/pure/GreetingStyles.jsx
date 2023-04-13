import React, { useState } from "react";
import reactLogo from "../../assets/react.svg";

const loggedStyle = {
  color: "white",
  fontWeight: "bold",
};

const unloggedStyle = {
  color: "red",
};

export const GreetingStyles = ({ name }) => {
  const [logged, setLogged] = useState(false);

  return (
   <div className="col-12 d-flex justify-content-center">
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>        
     <div style={logged ? loggedStyle : unloggedStyle}>
      {logged ? <p>Hola, {name}</p> : <p>Porfavor Inicia Sesión</p>}
      <button onClick={() => setLogged(!logged)}>
        {logged ? "Cerrar Sesión" : "Iniciar Sesión"}
      </button>
    </div>
   </div>
  );
};
