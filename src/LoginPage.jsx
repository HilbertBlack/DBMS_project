import React from "react";
import "./LoginPage.css";


//================FUNCTION TO CONNECT TO SERVER=================
async function connect_to_server(json_body)
{
  const res = await fetch("http://localhost:5050/login/user_credentials",
    {
      method:"POST",
      headers:
      {
        'Content-Type':'application/json'
      },
      body:JSON.stringify(json_body)
    }
  );

  return res;
}

async function get_user_credentials()
{
  const _username = document.getElementById("username");
  const _password = document.getElementById("password");

  const json_body = 
  {
    user_name : _username.value,
    pass_word : _password.value
  };

  console.log("the data to be sent to the server:",json_body);
  //sending the data to the client
  const return_response = await connect_to_server(json_body);

  const isValidUser  = (await return_response.json()).isValidUser;
  console.log("the response from the server::::",isValidUser);
  if(isValidUser)
    alert("login successfull");
  else 
    alert("the username and password is incorrect");
}


//===================================================================
const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="left-panel">
        <div className="logo-container">
          <h1>
            <span className="logo-box">V</span>OTE
          </h1>
          <h2>Online Voting Management System</h2>
          <p className="tagline">Secure, Transparent, and Efficient</p>
        </div>
      </div>

      <div className="right-panel">
        <div className="form-container">
          <h2 className="form-title">Welcome Back</h2>
          <p className="greeting">Your vote matters. Log in to participate.</p>
          
          <div className="input-group">
            <label htmlFor="username">Username or Email</label>
            <input 
              id="username" 
              type="text" 
              placeholder="Enter your username or email" 
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              id="password" 
              type="password" 
              placeholder="Enter your password" 
            />
          </div>
          
          <button onClick={get_user_credentials} className="login-btn">Log In</button>

          <div className="options">
            <label className="remember-me">
              <input type="checkbox" defaultChecked /> 
              <p><span>Remember me</span></p>
            </label>
            <a href="#" className="forgot">Forgot password?</a>
          </div>

          <div className="divider">
            <p><span>or</span></p>
          </div>

          <button className="outlook-btn">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg.png" 
              alt="Outlook logo" 
              className="outlook-logo"
            />
            Continue With Outlook
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;