import React from "react";
import { Carrousel } from "../../components/pure/Carrousel";
import { UsersList } from "../../components/containers/UsersList";

const HomePage = () => {
  return (
    <div>
      <div className="col-12 my-4">
        <UsersList />
      </div>
    </div>
  );
};

export default HomePage;
