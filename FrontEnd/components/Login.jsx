//setup stuff
//import everything, set up default variables, etc etc etc.
import React from 'react';

function Login({ console, goToCreateUser }){

    return <div id='loginBox' className='centerMe'>
        <h1>Please log in </h1>
        <form onSubmit={console}>
            <label>Username:</label>
            <input type="text" id="firstName" name="firstName"></input>
            <br></br>
            <label >Password:</label>
            <input type="text" id="lastName" name="lastName"></input>
            <br></br>
            <input type="submit" value="Submit"></input>
        </form>

        <button onClick={goToCreateUser}>Create A New Account</button>


        
    </div>
};
  
   export default Login;