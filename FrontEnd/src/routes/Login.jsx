import '../styles/Login.css'
import React from 'react'
import Images from '../images/SCycle.png';
import ServerRequests from '../types/ServerRequests';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let username = '';
  let password = '';

  const requestLogin = () => {
    ServerRequests.LoginUser(username, password)
    .then(data => {
      if(data.status === 200) {
        console.log("200");
        location.state = {username: username};
        window.localStorage.setItem("StuffLibrary", JSON.stringify({username: username}));
        navigate('/home');
      }
      else {
        // TODO: Add message to user that password was incorrect.
      }
    })
  }

  return (
    <div id='loginBox' className='centerMe'>
        <h1>Stuff Library</h1>
        <img id='logo' src={Images}/>
        <h2>Welcome</h2>
        <h3>login</h3>
          <input className="inputField" type="text" id="username" name="username" placeholder="username" onChange={(e) => username = e.target.value}></input>
          <input className="inputField" type="password" id="password" name="password" placeholder="password" onChange={(e) => password = e.target.value}></input>
          <input className="btn" type="submit" value="Submit" onClick={requestLogin}></input>

        <button className="btn" onClick={() => navigate('signup')}>Create A New Account</button>
        
    </div>
  )
}

export default Login