import React from "react";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <main className="container-fluid p-3">
      <Header />
      {children}
    </main>
  );
};

