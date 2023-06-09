import React from "react";
import EditName from "./EditName";

function NamePatch({ userName, setName }) {

  function handlePatch(id, e) {
    e.preventDefault();

    fetch(`http://localhost:3000/userName/${id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: e.target.name.value
      })
    })
      .then((response) => response.json())
      .then((patchedName) => {
        setName(patchedName);
      });
  }

  const mappedName = userName.map((user) => (
    <EditName
      key={user.id}
      name={user.name}
      handlePatch={(e) => handlePatch(user.id, e)}
    />
  ));

  return <div>{mappedName}</div>;
}

export default NamePatch;
