import React from "react";

const EmployeeTable = (props) => {
  return (
    <tr
      style={{
        borderBottom: "1px solid lightgray",
        textAlign: "center",
        backgroundColor:
          parseInt(props.index) % 2 === 0 ? "lightgray" : "white",
      }}
    >
      <td>
        <img alt="employee image" src={props.image} />
      </td>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>
        <a href={props.email}>{props.email}</a>
      </td>
      <td>{props.dob}</td>
    </tr>
  );
};

export default EmployeeTable;
