import React, { useEffect, useState } from "react";
import { getAllUsers, getUserById } from "../../services/FetchService";
import { Pages } from "./Pages";

export const UsersList = () => {
  const [singleUser, setSingleUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [pages, setPages] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [userPerPage, setUserPerPage] = useState(0);

  useEffect(() => {
    obtainsUsers(1);
  }, []);

  const obtainsUsers = async (page) => {
    let response;
    try {
      response = await getAllUsers(page);
      setUsers(response.data);
      setPages(response.page);
      setTotalPages(response.total_pages);
      setTotalUsers(response.total);
      setUserPerPage(response.per_page);
    } catch (error) {
      console.log(error);
    }
  };

  const obtainSingleUser = async (Id) => {
    let response;
    try {
      response = await getUserById(Id);
      setSingleUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>usuarios: </h3>
      {users.map((u) => (
        <p
          key={u.id}
          onClick={() => obtainSingleUser(u.id)}
          style={{ cursor: "pointer" }}
        >
          {JSON.stringify(u, null, 3)}
        </p>
      ))}

      <div className="col d-flex align-items-end flex-column p-3">
        <h6 className="fw-bold">
          mostrando {userPerPage * pages} registros de {totalUsers}
        </h6>
        <Pages
          totalPages={totalPages}
          active={pages}
          action={obtainsUsers}
          showPages={5}
        />
      </div>
      <div className="row justify-content-center">
        {singleUser && (
          <div
            className="card text-dark text-center"
            style={{ width: "18rem" }}
          >
            <h3 className="card-header">Usuario Seleccionado: </h3>
            <div className="card-body">
              <p>Id: {singleUser.id}</p>

              <p>Name: {singleUser.first_name}</p>
              <p>Last Name: {singleUser.last_name}</p>
              <p>Email: {singleUser.email}</p>
              <img src={singleUser.avatar} alt={singleUser.avatar} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
