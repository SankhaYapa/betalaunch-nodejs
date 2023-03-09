import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Button, Modal, Input } from "react-bootstrap";
import { FaArrowDown, FaArrowUp, FaSortAlphaUpAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AddEmployees } from "../addEmployees/AddEmployees";
import "./dashbord.css";
export const Dashboard = () => {
  const [show, setShow] = useState(false);

  const [employees, setEmployees] = useState([]);
  const [selectedEmployeeType, setSelectedEmployeeType] = useState(null);
  const [sortBy, setSortBy] = useState({
    key: "displayName",
    direction: "asc",
  });

  useEffect(() => {
    getEmployees();
  }, []);
  function getEmployees() {
    axios
      .get("http://localhost:8800/api/employee/")
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  const onDelete = (id) => {
    axios
      .delete(`http://localhost:8800/api/employee/delete/${id}`)
      .then((res) => {
        alert("Delete Successfull");
        getEmployees();
      });
  };
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleEmployeeTypeChange = (event) => {
    setSelectedEmployeeType(event.target.value);
  };

  const handleSortBy = (key) => {
    if (sortBy.key === key) {
      setSortBy({
        key: key,
        direction: sortBy.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setSortBy({
        key: key,
        direction: "asc",
      });
    }
  };

  const sortedEmployees = [...employees].sort((a, b) => {
    if (sortBy.direction === "asc") {
      return a[sortBy.key] > b[sortBy.key] ? 1 : -1;
    } else {
      return a[sortBy.key] < b[sortBy.key] ? 1 : -1;
    }
  });

  const filteredEmployees = selectedEmployeeType
    ? employees.filter(
        (employee) => employee.employeeType === selectedEmployeeType
      )
    : employees;

  function padWithLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, "0");
  }
  return (
    <div className="container">
      <div className="TableWrapper">
        <span className="HeadingTitle">People</span>
        <hr />
        <div className="row1">
          <div style={{ textAlign: "end" }}>
            <select
              name="employeeType"
              id="employeeType"
              className="SelectionBox"
              onChange={handleEmployeeTypeChange}
            >
              <option value="">Employee Types</option>
              <option value="Full Time" class="form-control">
                Full Time
              </option>
              <option value="Part Time" class="form-control">
                Part Time
              </option>
              <option value="Contract Basis" class="form-control">
                Contract Basis
              </option>
              <option value="Other" class="form-control">
                Other
              </option>
            </select>

            <button className="AddButton" onClick={handleClick}>
              Add People
            </button>

            {open && (
              <div
                className={`modal-content fade-down ${`AddEmployees ${
                  open ? "fade-down" : ""
                }`}`}
              >
                <AddEmployees></AddEmployees>
              </div>
            )}
          </div>
        </div>
        <div class="row">
          <div>
            <table className="Table">
              <thead className="TableHead">
                <tr className="TableRows">
                  <th
                    className="tdata"
                    onClick={() => handleSortBy("displayName")}
                  >
                    Display Name
                    {sortBy.key === "displayName" &&
                      (sortBy.direction === "asc" ? (
                        <FaArrowUp></FaArrowUp>
                      ) : (
                        <FaArrowDown></FaArrowDown>
                      ))}
                  </th>
                  <th className="tdata">Emp ID</th>
                  <th className="tdata">Designation</th>
                  <th className="tdata">Emp. Type</th>
                  <th className="tdata">Experience</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((item, index) => (
                  <tr key={index} className="TableRows">
                    <td className="tdata">{item.displayName}</td>
                    <td className="tdata">
                      {padWithLeadingZeros(index + 1, 3)}
                    </td>
                    <td className="tdata">{item.designation}</td>
                    <td className="tdata">{item.employeeType}</td>
                    <td className="tdata">{item.experience}</td>

                    <td className="tdataButton">
                      <a
                        href={`/editEmployee/${item._id}`}
                        title="Edit"
                        style={{ textDecoration: "none" }}
                      >
                        Edit
                      </a>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <a
                        title="Delete"
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => onDelete(item._id)}
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};
