import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { toast } from 'react-toastify';

const CreateAssignment = () => {
  const [assignmentName, setAssignmentName] = useState("");
  const [submissionDate, setSubmissionDate] = useState("");
  const [number, setNumber] = useState("1");
  const [subjectCode, setSubjectCode] = useState("");
  const [description, setDescription] = useState("");
  const [credits, setCredits] = useState(3);

  const navigate = useNavigate();

  const handleCreateAssignment = () => {
    let assignment = {
        "subject_id": parseInt(subjectCode),
        "assignment_name": assignmentName,
        "assignment_description": description,
        "assignment_id": parseInt(number),
        "submission_date": submissionDate,
        "marks": parseInt(credits)
    };
    let assignmentNotification = {
        "message": `A New assignment ${assignmentName} Has been created for you for subject ${parseInt(subjectCode)} !!`,
        "subject": `Assignment ${assignmentName} Added`
    };
    api.assignment.createAssignment(assignment).then(() => {
        toast.success('Assignment created successfully!!');
        api.subject.createSubjectNotification(assignmentNotification);
        navigate("/instructor");
    }); 
  };

  const handleCancel = () => {
    navigate("/instructor");
  };

  return (
    <div>
      <div className="header">
        <h2>Create Assignment</h2>
      </div>
      <div
        style={{ backgroundColor: "white", margin: "15px", padding: "10px" }}
      >
        <div style={styles.row}>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Assignment Name</label>
            <input
              style={styles.input}
              type="text"
              value={assignmentName}
              onChange={(e) => setAssignmentName(e.target.value)}
              placeholder="Assignment Name"
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Submission Date</label>
            <input
              style={styles.input}
              type="date"
              value={submissionDate}
              onChange={(e) => setSubmissionDate(e.target.value)}
              placeholder="Starting Date"
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Number</label>
            <select
              style={styles.input}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
        </div>
        <div style={styles.row}>
        <div style={styles.inputContainer}>
            <label style={styles.label}>Subject</label>
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
            <label style={styles.label}>Assignment Description</label>
            <input
              style={styles.input}
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Assignment Description"
            />
          </div>
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Marks</label>
            <select
              style={styles.input}
              value={credits}
              onChange={(e) => setCredits(e.target.value)}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
            </select>
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "flex-start", margin: "25px" }}
        >
          <button
            style={styles.createButton}
            onClick={handleCreateAssignment}
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

export default CreateAssignment;
