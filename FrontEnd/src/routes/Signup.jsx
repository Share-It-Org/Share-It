//setup stuff
//import everything, set up default variables, etc etc etc.
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ServerRequests from '../types/ServerRequests';

const Signup = () => {
    const navigate = useNavigate();
    const location = useLocation();

    let username = '';
    let password = '';
    let email = '';

    const requestCreateUser = () => {
        ServerRequests.CreateUser(username, password, email)
        .then(data => {
          if(data.status === 200){
            console.log('passed');
            location.state = {isLoggedIn: true};
            navigate('/home');
          }
        })
      }

    return (
    <div id='signUpBox' className='centerMe'>
        <h2>Create an account</h2>
        <input type="text" id="firstName" name="firstName" placeholder="name" onChange={(e) => username = e.target.value}></input>
        <br></br>
        <input type="password" id="password" name="password" placeholder="password" onChange={(e) => password = e.target.value}></input>
        <br></br>
        <input type="text" id="email" name="email" placeholder="e-mail" onChange={(e) => email = e.target.value}></input>
        <br></br>
        <input className="btn" type="submit" value="Submit" onClick={requestCreateUser}></input>
        </div>
    )
};
  
export default Signup;