import React, { useEffect, useState } from "react";
import { Carrousel } from "../../components/pure/Carrousel";
import { UsersList } from "../../components/containers/UsersList";
import { JokeComponent } from "../../components/pure/JokeComponent";

const HomePage = () => {
  return (
    <div>
      {/* <div className="col-12 my-4">
        <Carrousel />
      </div> */}
      {/* <div className="col-12 my-4">
        <UsersList />
      </div> */}
      <div>
        <JokeComponent />
      </div>
    </div>
  );
};

export default HomePage;
