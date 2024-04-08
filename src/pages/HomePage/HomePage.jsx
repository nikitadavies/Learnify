import React, { useState } from "react";
import { HomeImage } from "../../assets";
import { Logo } from "../../assets";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import api from "../../api"

function HomePage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let login = {
      "user_email": username,
      "user_password": password
  };
  api.login.login(login).then((response) => {
   localStorage.setItem('responseData', JSON.stringify(response));
   if(response.role == 'instructor'){
    navigate("/instructor")
   }else{
    navigate("/student/subjects")
   }
});  
};
  return (
    <div className="login-page">
      <div className="login-left">
        {!isLoginClicked ? (<div style={{ display: "flex", flexDirection: "column" }}>
          <div class="title-div">
            <img src={Logo} width="250px" height="250px" />
            <h1>Learnify</h1>
          </div>
          <h2 style={{ color: "#392c44" }}>Empower Growth, Enhance Learning</h2>
          <div style={{ marginTop: "25px" }}>
            <p>
              Have an account? <a style={{ color: "#392c44", fontWeight: 'bold' }} onClick={() => {setIsLoginClicked(true)}}>Login</a>
            </p>
          </div>
        </div>) : (
          <>
            <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="form-group">
              <button type="submit" style={{ backgroundColor: '#392c44'}}>Login</button>
            </div>
          </form>
        </div>
          </>
        )}
      </div>
      <div className="login-right">
        <div>
          <img src={HomeImage} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
