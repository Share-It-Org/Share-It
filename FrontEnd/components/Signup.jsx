//setup stuff
//import everything, set up default variables, etc etc etc.
import React from 'react';
import Images from '../Images/SCycle.png';



function Signup({sendACreateUserRequest}){
    let username = '';
    let password = '';
    let email = '';

    return <div id='signUpBox' className='centerMe'>
         <img id="logo" src={Images}/>
        <h2>create an account</h2>
    <form onSubmit={(event) => sendACreateUserRequest(event, username, password, email)}>
        <input className="inputField" type="text" id="firstName" name="firstName" placeholder="name" onChange={(e) => username = e.target.value}></input>
        <br/>
        <input className="inputField" type="password" id="password" name="password" placeholder="password" onChange={(e) => password = e.target.value}></input>
        <br/>
        <input className="inputField" type="text" id="email" name="email" placeholder="e-mail" onChange={(e) => email = e.target.value}></input>
        <br/>
        <div><input className="btn" type="submit" value="Submit"></input></div>
    </form>

    
</div>
  
   };
  
   export default Signup;