import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Calendar } from "react-calendar";
import { Link, useNavigate } from "react-router-dom";
import "./addEmployees.css";
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
export const AddEmployees = () => {
  const [fullName, setfullName] = useState("");
  const [nameInitials, setnameInitials] = useState("");
  const [displayName, setdisplayName] = useState("");
  const [gender, setgender] = useState("");
  const [dob, setdob] = useState(null);
  const [email, setEmail] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [designation, setdesignation] = useState("");
  const [employeeType, setemployeeType] = useState("");
  const [joinDate, setjoinDate] = useState(null);
  const [experience, setexperience] = useState("");
  const [Salary, setSalary] = useState("");
  const [notes, setnotes] = useState();

  const navigate = useNavigate();
  function sendData(e) {
    e.preventDefault();

    const newEmployee = {
      fullName,
      nameInitials,
      displayName,
      gender,
      dob,
      email,
      mobileNumber,
      designation,
      employeeType,
      joinDate,
      experience,
      Salary,
      notes,
    };
    console.log(newEmployee);
    axios
      .post("http://localhost:8800/api/employee/add", newEmployee)
      .then(() => {
        navigate("/");
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  }
  function onClick() {
    window.location.reload();
  }

  const [showCalendar, setShowCalendar] = useState(false);

  const handleInputClick = () => {
    setShowCalendar(!showCalendar);
  };
  const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return (
    <div className="AddPopup">
      <div className="containerdiv">
        <div className="addWrapper">
          <div className="topArea">
            {" "}
            <span className="HeadingAddTitle">Add People</span>
            <Link onClick={onClick} style={{ textDecoration: "none" }}>
              <Close sx={{ fontSize: 14 }} className="closeicon"></Close>
            </Link>
          </div>

          <hr />
          <div className="homediv">
            <form onSubmit={sendData} className="formcontainer">
              <div style={{ textAlign: "start" }}>
                <label className="name">Full Name*</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  placeholder="Enter Full Name"
                  onChange={(e) => {
                    setfullName(e.target.value);
                  }}
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
                    onChange={(e) => {
                      setnameInitials(e.target.value);
                    }}
                  />
                </div>
                <div className="namesdiv2">
                  <label className="name">Preferred / Display Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter Display Name"
                    onChange={(e) => {
                      setdisplayName(e.target.value);
                    }}
                    title="Contact number must be 10 digits long"
                  />
                </div>
              </div>
              <div className="namesdiv">
                <div className="namesdiv2">
                  <label className="name">Gender</label>

                  <select
                    onChange={(e) => {
                      setgender(e.target.value);
                    }}
                    class="form-select"
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
                    onChange={(e) => {
                      setdob(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="namesdiv2">
                  <label className="name">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter Contact Number"
                    onChange={(e) => {
                      setmobileNumber(e.target.value);
                    }}
                    pattern="[0-9]{10}"
                    title="Contact number must be 10 digits long"
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
                    onChange={(e) => {
                      setdesignation(e.target.value);
                    }}
                  />
                </div>
                <div className="namesdiv2">
                  <label className="name">Employee Type</label>
                  <select
                    onChange={(e) => {
                      setemployeeType(e.target.value);
                    }}
                    class="form-select"
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
                    onChange={(e) => {
                      setjoinDate(e.target.value);
                    }}
                  />
                </div>

                <div className="namesdiv2">
                  <label className="name">Experience</label>
                  <select
                    onChange={(e) => {
                      setexperience(e.target.value);
                    }}
                    class="form-select"
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
                    onChange={(e) => {
                      setSalary(e.target.value);
                    }}
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
                  onChange={(e) => {
                    setnotes(e.target.value);
                  }}
                  style={{ height: "120px" }}
                />
              </div>
              <div className="BottomButtons">
                <Link onClick={onClick} style={{ textDecoration: "none" }}>
                  {" "}
                  <span className="Cancel">Cancel</span>
                </Link>

                <button type="submit" className="AddPeoles">
                  Add People
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
