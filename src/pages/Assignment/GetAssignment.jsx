import React, { useState, useEffect } from 'react';
import api from '../../api';
import { useNavigate } from "react-router-dom";

function GetAssignment() {
    const [assignments, setAssignments] = useState();
    const navigate = useNavigate();
    const storedUserData = localStorage.getItem('responseData');
    const userData = JSON.parse(storedUserData);
    const [isLoading, setIsLoading] = useState(false);

    const handleNavigate = (assignmentId, subject) => {
      navigate(`/${userData?.role}/assignments/${assignmentId}`, {
        state: { assignment: subject }
      });
  };

    async function fetchData() {
      setIsLoading(true);
        let assignment = {
            "subject_id": 1,
            "assignment_name": "asd",
            "assignment_description": "ddd",
            "assignment_id": 1,
            "submission_date": "2024-04-10",
            "marks": 5
        };
        // const response = await api.assignment.updateAssignment(assignment);
        const response = await api.assignment.getAssignments();
        if(response){
          setAssignments((response?.assignments));
        }
        setIsLoading(false);
        
      }
      useEffect(() => {
        console.log("hello");
        fetchData();
      }, []);
      if (isLoading) {
        return <div>Loading...</div>;
      }
  return (
    <>
    <h1 style={{textAlign: "left", padding: "20px"}}>
        Assignments
    </h1>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
      {assignments?.map(subject => (
        <div key={subject?.subject_id} onClick={() => handleNavigate(subject.assignment_id, subject)} style={{ border: '1px solid #392c44', borderRadius: '8px', margin: '10px', padding: '10px', width: '250px', height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fff' }}>
          <h3>{subject?.assignment_name}</h3>
          <p>Total Marks: {subject?.marks}</p>
          <p>Description: {subject?.assignment_description}</p>
          <p>Submission Date: {subject?.submission_date}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default GetAssignment;
