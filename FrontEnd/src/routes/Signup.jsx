//setup stuff
//import everything, set up default variables, etc etc etc.
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ServerRequests from '../types/ServerRequests';
import Images from '../images/SCycle.png';

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
      <img id='logo' src={Images}/>
        <h2>create an account</h2>
        <input className="inputField" type="text" id="firstName" name="firstName" placeholder="name" onChange={(e) => username = e.target.value}></input>
        <br/>
        <input className="inputField" type="password" id="password" name="password" placeholder="password" onChange={(e) => password = e.target.value}></input>
        <br/>
        <input className="inputField" type="text" id="email" name="email" placeholder="e-mail" onChange={(e) => email = e.target.value}></input>
        <br/>
        <input className="btn" type="submit" value="Submit" onClick={requestCreateUser}></input>
        </div>
    )
};
  
export default Signup;