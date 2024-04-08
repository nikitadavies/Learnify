import React,  { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../../api';
import { toast } from 'react-toastify';

import './GetAssignmentById.css';

const GetAssignmentById = () =>{
  const location = useLocation();
  const assignment = location.state; 
  const navigate = useNavigate();
  const storedUserData = localStorage.getItem('responseData');
  const userData = JSON.parse(storedUserData);
  const [file, setFile] = useState(null);

  const handleEditClick = () => {
    navigate(`/instructor/assignment/edit/${assignment.assignment?.assignment_id}`, {
      state: assignment 
    });
  };
  
  const handleDeleteClick = async() => {
    let deleteAssignment = {
      "subject_id": assignment?.assignment?.subject_id,
      "assignment_name": assignment?.assignment?.assignment_name,
      "assignment_description": assignment.assignment?.assignment_description,
      "assignment_id": assignment?.assignment?.assignment_id,
      "submission_date": assignment?.assignment?.submission_date,
      "marks": assignment.assignment?.marks
  };
    const response = await api.assignment.deleteAssignment(deleteAssignment);
        if(response){
         navigate('/instructor/assignments')
        }
  };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            alert('Please select a file.');
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async () => {
            const fileContent = reader.result.split(',')[1]; // Base64 encoded content
            let uploadassignment = {
              student_name: userData?.user_name,
              subject_id: assignment?.assignment?.subject_id,
              assignment_id: assignment?.assignment?.assignment_id,
              fileName: file.name,
              fileType: file.type,
              fileContent
          }
          console.log(uploadassignment);
            try {
                const response = await api.assignment.uploadAssignment(uploadassignment);
                toast.success('Assignment Submitted Successfully!!');
            } catch (error) {
                console.error('Error uploading file:', error);
                alert('Error uploading file.');
            }
        };
    };


  return (
    <div>
    <div className="header">
      <h4 className="title">Assignment Details</h4>
     <div style={{display: 'flex', flexDirection: "row", justifyContent: 'space-around'}}>
      {userData?.role == 'instructor' && <button onClick={handleEditClick} className='edit-button'>
        Edit Assignment
      </button>}
      {userData?.role == 'instructor' && <button onClick={handleDeleteClick} className='edit-button'>
       Delete
      </button>}
      </div>
    </div>
    <div className="card">
      <div className="field-row">
        <div className="field">
          <div className="field-name">Assignment name</div>
          <div className="field-data">{assignment?.assignment?.assignment_name}</div>
        </div>
        <div className="field">
          <div className="field-name">Assignment Description</div>
          <div className="field-data">{assignment.assignment?.assignment_description}</div>
        </div>
        <div className="field">
          <div className="field-name">Submission Date</div>
          <div className="field-data">{assignment.assignment?.submission_date}</div>
        </div>
        <div className="field">
          <div className="field-name">Marks</div>
          <div className="field-data">{assignment.assignment?.marks}</div>
        </div>
      </div>
    </div>
    {userData?.role === 'student' && (
  <div className='assignment-card'>
    <h4 className="title">Submit Assignment</h4>
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
      <div>
        <label>Select file:</label>
        <input type="file" onChange={e => setFile(e.target.files[0])} />
      </div>
      <button type="submit" className='upload-button'>Upload</button>
    </form>
  </div>
)}
  </div>
  );
}

export default GetAssignmentById;
