//setup stuff
//import everything, set up default variables, etc etc etc.
import React from 'react';



function Signup({sendACreateUserRequest}){
    let username = '';
    let password = '';
    let email = '';

    return <div id='signUpBox' className='centerMe'>
        <h2>create an account</h2>
    <form onSubmit={(event) => sendACreateUserRequest(event, username, password, email)}>
        <input type="text" id="firstName" name="firstName" placeholder="name" onChange={(e) => username = e.target.value}></input>
        <br></br>
        <input type="password" id="password" name="password" placeholder="password" onChange={(e) => password = e.target.value}></input>
        <br></br>
        <input type="text" id="email" name="email" placeholder="e-mail" onChange={(e) => email = e.target.value}></input>
        <br></br>
        <input id="button" type="submit" value="Submit"></input>
    </form>

    
</div>
  
   };
  
   export default Signup;