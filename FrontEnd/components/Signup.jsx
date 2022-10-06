//setup stuff
//import everything, set up default variables, etc etc etc.
import React from 'react';
import Images from '../Images/SCycle.png';
import { Navigate, useNavigate } from 'react-router-dom';
import ServerRequests from '../src/types/ServerRequests';



function Signup({sendACreateUserRequest}){
    const navigate = useNavigate();

    let username = '';
    let password = '';
    let email = '';


    const requestCreateUser = () => {
        ServerRequests.CreateUser(username, password, email)
        .then(data => {
          if(data.status === 200){
            location.state.isLoggedIn = true;
            navigate('/home');
          }
        })
      }

    return (
    <div id='signUpBox' className='centerMe'>
    <img id="logo" src={Images}/>
        <h2>create an account</h2>
    <form onSubmit={requestCreateUser}>
        <input className="inputField" type="text" id="firstName" name="firstName" placeholder="name" onChange={(e) => username = e.target.value}></input>
        <br/>
        <input className='inputField' type="password" id="password" name="password" placeholder="password" onChange={(e) => password = e.target.value}></input>
        <br/>
        <input className='inputField' type="text" id="email" name="email" placeholder="e-mail" onChange={(e) => email = e.target.value}></input>
        <br/>
        <input className="btn" type="submit" value="Submit"></input>
    </form>
        </div>
    )
};
  
export default Signup;