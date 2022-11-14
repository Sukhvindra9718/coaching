import React, { Fragment, useRef, useState } from "react";
import Loader from "../layout/Loader/Loader";
import "./AdmissionForm.css";
const AdmissionForm = () => {
  const [StudentName, setStudentName] = useState("");
  const [StudentEmail, setStudentEmail] = useState("");
  const [StudentAdhaar, setStudentAdhaar] = useState("");
  const [StudentPhoneNo, setStudentPhoneNo] = useState("");
  const [StudentDOB, setStudentDOB] = useState("");
  const [StudentGender, setStudentGender] = useState("");
  const [StudentCourse, setStudentCourse] = useState("Volvo");
  let loading = false;
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="form-container">
            <form className="form">
              <div className="row1">
                <label htmlFor="name">Name</label>
                <input
                  type="name"
                  id="name"
                  placeholder="Enter Your Full Name"
                  required
                  value={StudentName}
                  onChange={(e) => setStudentName(e.target.value.toLowerCase())}
                />
              </div>
              <div className="row1">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  required
                  value={StudentEmail}
                  onChange={(e) =>
                    setStudentEmail(e.target.value.toLowerCase())
                  }
                />
              </div>
              <div className="row1">
                <label htmlFor="adhaar">Adhaar</label>
                <input
                  type="text"
                  id="adhaar"
                  placeholder="Enter Your Adhaar Number"
                  required
                  value={StudentAdhaar}
                  onChange={(e) => setStudentAdhaar(e.target.value)}
                />
              </div>
              <div className="row1">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter Your Phone Number"
                  required
                  value={StudentPhoneNo}
                  onChange={(e) => setStudentPhoneNo(e.target.value)}
                />
              </div>
              <div className="row1">
                <label htmlFor="dob">DOB</label>
                <input
                  type="date"
                  id="dob"
                  placeholder="Enter Your DOB"
                  required
                  value={StudentDOB}
                  onChange={(e) => setStudentDOB(e.target.value)}
                />
              </div>
              <div className="row1">
                <label htmlFor="gender">Gender</label>
                <select value={StudentGender} onChange={(e)=>setStudentGender(e.target.value)} id="select">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="row1">
                <label htmlFor="course">Course</label>
                <select value={StudentCourse} onChange={(e)=>setStudentCourse(e.target.value)} id="select">
                  <option value="JEE">JEE</option>
                  <option value="NEET">NEET</option>
                </select>
              </div>
              <input type="submit" id="btn" value="Submit" className="" />
            </form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default AdmissionForm;
