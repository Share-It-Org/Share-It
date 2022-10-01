//setup stuff
//import everything, set up default variables, etc etc etc.
import React, {Component} from 'react';

function Login({ username }){

    return <div id='loginBox'>
        <h1>Please log in </h1>
        <form>
            <label>Username:</label>
            <input type="text" id="fname" name="fname"></input>
            <br></br>
            <label >Password:</label>
            <input type="text" id="lname" name="lname"></input>
            <br></br>
            <input type="submit" value="Submit"></input>
        </form>

        
    </div>
};
  
   export default Login;