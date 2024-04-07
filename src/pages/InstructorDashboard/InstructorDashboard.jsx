import React, { useState } from 'react';
import { HomeImage } from '../../assets';
import { CapLogo } from '../../assets';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';

function InstructorDashboard() {
  const navigate = useNavigate();
  const storedUserData = localStorage.getItem('responseData');
  const userData = JSON.parse(storedUserData);

  return (
    <div className="instructor-page">
    <h1 style={{textAlign: "left", padding: "20px"}}>
        Hello {userData.user_name}!!
    </h1>
    <div className="card-container">
            <Card title={userData.role == 'instructor' ? "Create Subject" : "View Subjects"} onClick={() => {navigate(userData.role == 'instructor' ?'/instructor/create-subject': '/student/subjects')}}/>
            <Card title={userData.role == 'instructor' ? "Create Assignment" : "View Assignment"} onClick={() => {navigate(userData.role == 'instructor' ? '/instructor/create-assignment' : '/student/assignments')}}/>
        </div>
    </div>
  );
}

export default  InstructorDashboard;
