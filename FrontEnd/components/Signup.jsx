//setup stuff
//import everything, set up default variables, etc etc etc.
import React from 'react';

function handleClick(event, sendACreateUserRequest) {
    event.preventDefault();
    // let usernameText = document.getElementById('firstName')
    // let passwordText = document.getElementById('password')
    // let emailText = document.getElementById('email')
    // console.log(usernameText);
    // sendACreateUserRequest(usernameText, passwordText, emailText);
}

function Signup({sendACreateUserRequest}){
    let username = '';
    let password = '';
    let email = '';

    return <div id='signUpBox' className='centerMe'>
        <h1>Please create an account</h1>
    <form onSubmit={(event) => sendACreateUserRequest(event, username, password, email)}>
        <label>Username:</label>
        <input type="text" id="firstName" name="firstName" onChange={(e) => username = e.target.value}></input>
        <br></br>
        <label>Password:</label>
        <input type="text" id="password" name="password" onChange={(e) => password = e.target.value}></input>
        <br></br>
        <label>Email:</label>
        <input type="text" id="email" name="email" onChange={(e) => email = e.target.value}></input>
        <br></br>
        <input type="submit" value="Submit"></input>
    </form>

    
</div>
  
   };
  
   export default Signup;