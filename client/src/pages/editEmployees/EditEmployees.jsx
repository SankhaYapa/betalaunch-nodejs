import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Calendar } from "react-calendar";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import "./editEmployees.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faDroplet,
  faDropletSlash,
} from "@fortawesome/free-solid-svg-icons";

import Close from "@mui/icons-material/Close";
export default function EditEmployees() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    fullName: "",
    nameInitials: "",
    displayName: "",
    gender: "",
    dob: "",
    email: "",
    mobileNumber: "",
    designation: "",
    employeeType: "",
    joinedDate: "",
    Salary: "",
    notes: "",
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      const res = await axios.get(
        `http://localhost:8800/api/employee/get/${id}`
      );
      setEmployee(res.data);
      console.log(res.data);
    };
    fetchEmployee();
  }, [id]);
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios
        .put(`http://localhost:8800/api/employee/update/${id}`, employee)
        .then(navigate("/"));
      window.location.reload();
      console.log(employee);
    } catch (err) {
      console.log(err);
    }
  };
  function onClick() {
    window.location.reload();
  }

  const [showCalendar, setShowCalendar] = useState(false);

  const handleInputClick = () => {
    setShowCalendar(!showCalendar);
  };

  const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return (
    <div className="editPopup">
      <div className="containerdiv">
        <div className="addWrapper">
          <div className="topArea">
            {" "}
            <span className="HeadingAddTitle">Edit People</span>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Close sx={{ fontSize: 14 }} className="closeicon"></Close>
            </Link>
          </div>

          <hr />
          <div className="homediv">
            <form className="formcontainer">
              <div style={{ textAlign: "start" }}>
                <label className="name">Full Name*</label>

                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  placeholder="Enter Full Name"
                  value={employee.fullName}
                  onChange={(e) =>
                    setEmployee({ ...employee, fullName: e.target.value })
                  }
                />
              </div>

              <div className="namesdiv">
                <div className="namesdiv2">
                  <label className="name">Name with initials*</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullname"
                    placeholder="Enter Name with initials"
                    value={employee.nameInitials}
                    onChange={(e) =>
                      setEmployee({
                        ...employee,
                        nameInitials: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="namesdiv2">
                  <label className="name">Preferred / Display Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter Display Name"
                    title="Contact number must be 10 digits long"
                    value={employee.displayName}
                    onChange={(e) =>
                      setEmployee({ ...employee, displayName: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="namesdiv">
                <div className="namesdiv2">
                  <label className="name">Gender</label>

                  <select
                    class="form-select"
                    value={employee.gender}
                    onChange={(e) =>
                      setEmployee({ ...employee, gender: e.target.value })
                    }
                  >
                    <option value="" selected disabled hidden>
                      Gender
                    </option>
                    <option value="Male" class="form-control">
                      Male
                    </option>
                    <option value="Female" class="form-control">
                      Female
                    </option>
                    <option value="Other" class="form-control">
                      Other
                    </option>
                  </select>
                </div>
                <div className="namesdiv2">
                  <label className="name">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    id="fullname"
                    value={employee.dob}
                    onChange={(e) =>
                      setEmployee({ ...employee, dob: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="namesdiv">
                <div className="namesdiv2">
                  <label className="name">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="fullname"
                    placeholder="Enter Your Email"
                    value={employee.email}
                    onChange={(e) =>
                      setEmployee({ ...employee, email: e.target.value })
                    }
                  />
                </div>
                <div className="namesdiv2">
                  <label className="name">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter Contact Number"
                    pattern="[0-9]{10}"
                    title="Contact number must be 10 digits long"
                    value={employee.mobileNumber}
                    onChange={(e) =>
                      setEmployee({ ...employee, mobileNumber: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="namesdiv">
                <div className="namesdiv2">
                  <label className="name">Designation</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullname"
                    placeholder="Enter your designation"
                    value={employee.designation}
                    onChange={(e) =>
                      setEmployee({ ...employee, designation: e.target.value })
                    }
                  />
                </div>
                <div className="namesdiv2">
                  <label className="name">Employee Type</label>
                  <select
                    class="form-select"
                    value={employee.employeeType}
                    onChange={(e) =>
                      setEmployee({ ...employee, employeeType: e.target.value })
                    }
                  >
                    <option value="" selected disabled hidden>
                      Employee Type
                    </option>
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
                </div>
              </div>
              <div className="namesdiv">
                <div className="namesdiv2">
                  <label className="name">Joined Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="fullname"
                    value={employee.joinDate}
                    onChange={(e) =>
                      setEmployee({ ...employee, joinDate: e.target.value })
                    }
                  />
                </div>

                <div className="namesdiv2">
                  <label className="name">Experience</label>
                  <select
                    class="form-select"
                    value={employee.experience}
                    onChange={(e) =>
                      setEmployee({ ...employee, experience: e.target.value })
                    }
                  >
                    <option value="" selected disabled hidden>
                      Experience
                    </option>
                    <option value="01 Year" class="form-control">
                      01 Year
                    </option>
                    <option value="02 Year" class="form-control">
                      02 Year
                    </option>
                    <option value="03 Year" class="form-control">
                      03 Year
                    </option>
                  </select>
                </div>
              </div>
              <div className="namesdiv">
                <div className="namesdiv2">
                  <label className="name">Salary</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullname"
                    placeholder="Enter expected salary"
                    value={employee.Salary}
                    onChange={(e) =>
                      setEmployee({ ...employee, Salary: e.target.value })
                    }
                  />
                </div>
              </div>

              <div style={{ textAlign: "start" }}>
                <label className="name">Personal Notes</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="fullname"
                  placeholder="Enter personal note here...."
                  style={{ height: "120px" }}
                  value={employee.notes}
                  onChange={(e) =>
                    setEmployee({ ...employee, notes: e.target.value })
                  }
                />
              </div>
              <div className="BottomButtons">
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  {" "}
                  <span className="Cancel">Cancel</span>
                </Link>

                <button
                  type="submit"
                  className="AddPeoles"
                  onClick={handleUpdate}
                >
                  Edit People
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
