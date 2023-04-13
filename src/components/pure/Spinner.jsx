import React from "react";
import "../../styles/Spinner.scss";

export const Spinner = () => {
  return (
    <div className="text-center">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="text-dark fw-bold">cargando espera un momento...</p>
    </div>
  );
};
