import React, { useEffect, useState } from "react";
import { getAllUsers, getUserById } from "../../services/FetchService";
import { Pages } from "./Pages";

export const UsersList = () => {
  const [singleUser, setSingleUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [pages, setPages] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [userPerPage, setUserPerPage] = useState(0);

  useEffect(() => {
    obtainsUsers(pages);
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

  const obtainSingleUser = async () => {
    let response;
    try {
      response = await getUserById();
      const user = response.results.shift();
      setSingleUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>usuarios: </h3>
      {users.map((u) => (
        <p key={u.id} style={{ cursor: "pointer" }}>
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
        <h1 className="text-center fw-bold">Genera usuarios Aleatorios</h1>
        {singleUser && (
          <div
            className="card text-dark text-center"
            style={{ width: "18rem" }}
          >
            <h3 className="card-header">Usuario Seleccionado: </h3>
            <div className="card-body">
              <p>
                Id: {singleUser.id.name} {singleUser.id.value}
              </p>

              <p>
                Name: {singleUser.name.title} {singleUser.name.first}{" "}
              </p>
              <p>Last Name: {singleUser.name.last}</p>
              <p>Email: {singleUser.email}</p>
              <img
                src={singleUser.picture.thumbnail}
                alt={singleUser.picture.thumbnail}
              />
            </div>
          </div>
        )}
        <div className="d-flex justify-content-center my-3">
          <button onClick={obtainSingleUser}>Generar usuario aleatorio</button>
        </div>
      </div>
    </div>
  );
};
