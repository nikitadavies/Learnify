import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './LeftNavigation.css';

function LeftNavigation() {
  const navigate = useNavigate();

  const handleLogout = () => {
   
    localStorage.removeItem('userData');
    navigate('/');
  };
  return (
  <div className="navigation">
  <NavLink to="/instructor/subjects" isActive={(match, location) => {
    return match || location.pathname === "/";
  }} style={{textDecoration: 'none'}}>
    <div className={`navigation-item`}>
      <span className="navigation-title">Subjects</span>
    </div>
  </NavLink>
  <NavLink to="/instructor/assignments" isActive={(match, location) => {
    return match;
  }} style={{textDecoration: 'none'}}>
    <div className={`navigation-item`}>
      <span className="navigation-title">Assignments</span>
    </div>
  </NavLink>
  <NavLink to="/" onClick={handleLogout} style={{marginTop: 'auto', marginBottom: '30%'}}>
    <div>
      <span className="navigation-title">Logout</span>
    </div>
  </NavLink>
</div>
);
}

export default LeftNavigation;
