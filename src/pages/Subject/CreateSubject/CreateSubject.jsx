import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import { toast } from 'react-toastify';

const CreateSubject = () => {
  const [subjectName, setSubjectName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [type, setType] = useState("Undergraduate");
  const [subjectCode, setSubjectCode] = useState();
  const [description, setDescription] = useState("");
  const [credits, setCredits] = useState(3);

  const navigate = useNavigate();

  const handleCreateSubject = () => {
    let subject = {
        "subject_id": parseInt(subjectCode),
        "subject_name": subjectName,
        "subject_description": description,
        "subject_type": type,
        "start_date": startDate,
        "credits": parseInt(credits)
    };
    let subjectNotification = {
        "message": `A New subject ${subjectName} Has been created for you!!`,
        "subject": `${subjectName} Course Added`
    };
    api.subject.createSubject(subject).then(() => {
        toast.success('Subject created successfully!!');
        api.subject.createSubjectNotification(subjectNotification);
        navigate("/instructor");
    });    
  };

  const handleCancel = () => {
    navigate("/instructor");
  };

  return (
    <div>
      <div className="header">
        <h2>Create Subject</h2>
      </div>
      <div
        style={{ backgroundColor: "white", margin: "15px", padding: "10px" }}
      >
        <div style={styles.row}>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Subject Name</label>
            <input
              style={styles.input}
              type="text"
              value={subjectName}
              onChange={(e) => setSubjectName(e.target.value)}
              placeholder="Subject Name"
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Starting Date</label>
            <input
              style={styles.input}
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="Starting Date"
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Type</label>
            <select
              style={styles.input}
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="UnderGraduate">UnderGraduate</option>
              <option value="Graduate">Graduate</option>
              <option value="PH.D">PH.D</option>
            </select>
          </div>
        </div>
        <div style={styles.row}>
        <div style={styles.inputContainer}>
            <label style={styles.label}>Subject Code</label>
            <input
              style={styles.input}
              type="text"
              value={subjectCode}
              onChange={(e) => setSubjectCode(e.target.value)}
              placeholder="Subject Code"
            />
          </div>
          <div style={styles.inputContainer}>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Subject Description</label>
            <input
              style={styles.input}
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Subject Description"
            />
          </div>
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Credits</label>
            <select
              style={styles.input}
              value={credits}
              onChange={(e) => setCredits(e.target.value)}
            >
              <option value={3}>3</option>
              <option value={6}>6</option>
            </select>
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "flex-start", margin: "25px" }}
        >
          <button
            style={styles.createButton}
            onClick={handleCreateSubject}
          >
            Create
          </button>
          <button style={styles.cancelButton} onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    marginRight: "10px",
  },
  label: {
    textAlign: "left",
    color: "#3E3E3E",
    opacity: 1,
    fontSize: "16px"
  },
  input: {
    width: "400px",
    height: "35px",
    background: "#FAFAFA",
    border: "1px solid #D9D9D9",
    opacity: 1,
    borderRadius: "8px",
    paddingLeft: "10px",
    marginTop: "5px"
  },
  createButton: {
    background: "#392c44",
    boxShadow: "0px 3px 6px #BFEEFF",
    borderRadius: "8px",
    opacity: 1,
    width: "120px",
    height: "35px",
    color: "white",
    border: "none",
    marginRight: "10px",
    cursor: "pointer",
  },
  disabledButton: {
    boxShadow: "0px 3px 6px #BFEEFF",
    borderRadius: "8px",
    width: "120px",
    height: "35px",
    color: "white",
    border: "none",
    marginRight: "10px",
    backgroundColor: "#8A8C8F",
    cursor: "not-allowed",
    opacity: 0.5,
  },
  cancelButton: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #C9C9C929",
    border: "1px solid #8A8C8F",
    opacity: 1,
    borderRadius: "8px",
    width: "120px",
    height: "35px",
    color: "#8A8C8F",
    cursor: "pointer",
  },
};

export default CreateSubject;
