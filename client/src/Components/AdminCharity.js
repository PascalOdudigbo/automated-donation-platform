import React from "react";

function AdminCharity({id, name, address, email, approved, edit, deletebtn}) {
  return (
    <tr id={id}>
      <td>{name}</td>
      <td>{address}</td>
      <td>{email}</td>
      <td>{approved}</td>
      <td>{edit}</td>
      <td>{deletebtn}</td>
    </tr>
  );
}

export default AdminCharity;