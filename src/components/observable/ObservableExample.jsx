import React, { useState } from "react";
import { getNumbers } from "../../services/ObservablesServices";

export const ObservableExample = () => {
  const [number, setNumber] = useState(0);

  const obtainsNumbers = () => {

    console.log("suscripcion");
    getNumbers.subscribe({
      next(newNumber) {
        console.log({ newNumber });
        setNumber(newNumber);
      },
      error(e) {
        console.log(error);
      },
      complete() {
        alert("termino el obserbale");
      },
    });
    console.log("finish suscripcion");

  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={obtainsNumbers}>Obtener</button>
    </div>
  );
};
