import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import api from "../../api";

function EditAssignment() {
  const location = useLocation();
  const assignment = location.state; 

  const [assignmentName, setAssignmentName] = useState("");
  const [submissionDate, setSubmissionDate] = useState("");
  const [number, setNumber] = useState("1");
  const [subjectCode, setSubjectCode] = useState("");
  const [description, setDescription] = useState("");
  const [credits, setCredits] = useState(3);


  useEffect(() => {
    if (assignment?.assignment) {
      const {
        assignment_name,
        submission_date,
        assignment_description,
        assignment_id,
        subject_id,
        marks
      } = assignment?.assignment;
      setAssignmentName(assignment_name);
      setSubmissionDate(submission_date);
      setDescription(assignment_description);
      setNumber(assignment_id);
      setSubjectCode(subject_id);
      setCredits(marks);
    }
  }, [assignment]);

  const handleSubmit = (event) => {
    let assignment = {
        "subject_id": parseInt(subjectCode),
        "assignment_name": assignmentName,
        "assignment_description": description,
        "assignment_id": parseInt(number),
        "submission_date": submissionDate,
        "marks": parseInt(credits)
    };
    api.assignment.updateAssignment(assignment)
      .then((response) => {
        console.log(response);
        window.location.href = `/instructor`;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCancel = () => {
    window.location.href = `/instructor`;
  };


  return (
    <div>
      <div className="header">
        <h4 style={{ backgroundColor: "white" }}>Edit Assignment</h4>
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
              placeholder="Submission Date"
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
        <div>
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
        </div>
        <div
          style={{ display: "flex", alignItems: "flex-start", margin: "25px" }}
        >
          <button style={{ backgroundColor: "#392c44", color: "#fff", marginRight: '10px'}} onClick={handleSubmit}>
            Save
          </button>
          <button  onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

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
    fontSize: "16px",
  },
  input: {
    width: "400px",
    height: "35px",
    background: "#FAFAFA",
    border: "1px solid #D9D9D9",
    opacity: 1,
    borderRadius: "8px",
    paddingLeft: "10px",
    marginTop: "5px",
  },
  createButton: {
    background: "#03AEEE 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #BFEEFF",
    borderRadius: "3px",
    opacity: 1,
    width: "120px",
    height: "25px",
    color: "white",
    border: "none",
    marginRight: "10px",
    cursor: "pointer",
    '&:disabled': {
      backgroundColor: "#8A8C8F",
      cursor: 'not-allowed',
      opacity: 0.5,
    }
  },
  cancelButton: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #C9C9C929",
    border: "1px solid #8A8C8F",
    borderRadius: "3px",
    opacity: 1,
    width: "120px",
    height: "25px",
    color: "#8A8C8F",
    cursor: "pointer",
  },
};

export default EditAssignment;
