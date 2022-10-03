//setup stuff
//import everything, set up default variables, etc etc etc.
import React from 'react';

function Login({ sendALoginRequest, goToCreateUser }){
    let username = '';
    let password = '';

    return <div id='loginBox' className='centerMe'>
        <h1>Please log in </h1>
        <form onSubmit={(event) => sendALoginRequest(event, username, password)}>
            <label>Username:</label>
            <input type="text" id="username" name="username" onChange={(e) => username = e.target.value}></input>
            <br></br>
            <label >Password:</label>
            <input type="text" id="password" name="password" onChange={(e) => password = e.target.value}></input>
            <br></br>
            <input type="submit" value="Submit"></input>
        </form>

        <button onClick={goToCreateUser}>Create A New Account</button>


        
    </div>
};
  
   export default Login;