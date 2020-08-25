import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/Header/Header";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";

import moment from "moment";

function App() {
  const [employees, setEmployees] = useState([]);
  const [filemployees, setfilEmployees] = useState([]);

  const [searchinput, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=200&nat=us")
      .then((response) => {
        setEmployees(response.data.results);
        setfilEmployees(response.data.results);
      });
  }, []);

  const searchWrapper = {
    display: "flex",
    justifyContent: "center",
  };

  const search = {
    marginTop: 30,
    padding: 8,
    border: "1px solid gray",
    borderRadius: 4,
  };

  const filterEmps = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      setfilEmployees(employees);
    } else {
      setfilEmployees(
        employees.filter(
          (emp) =>
            `${emp.name.first} ${emp.name.last}`
              .toLowerCase()
              .includes(e.target.value.toLowerCase()) ||
            emp.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
            moment(emp.dob.date)
              .format("L")
              .toLowerCase()
              .includes(e.target.value.toLowerCase()) ||
            emp.phone.includes(e.target.value)
        )
      );
    }
  };

  return (
    <div className="App">
      <Header />
      <div style={searchWrapper}>
        <input
          style={search}
          type="text"
          placeholder="Search"
          value={searchinput}
          onChange={(e) => filterEmps(e)}
        />
      </div>
      <div style={{ padding: 20 }}>
        <table
          style={{ width: "100%", marginTop: 70, border: "1px solid gray" }}
        >
          <tr style={{ border: "1px solid gray" }}>
            <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
          </tr>
          {filemployees.map((emp, index) => (
            <EmployeeTable
              name={`${emp.name.first} ${emp.name.last}`}
              phone={emp.phone}
              email={emp.email}
              dob={moment(emp.dob.date).format("L")}
              image={emp.picture.large}
              key={index}
              index={index}
            />
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;
