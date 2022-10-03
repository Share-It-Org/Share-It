//setup stuff
//import everything, set up default variables, etc etc etc.
import React from 'react';

function Signup({consoleLogForTesting}){

    return <div id='signUpBox' className='centerMe'>
        <h1>Please create an account</h1>
    <form onSubmit={consoleLogForTesting}>
        <label>Username:</label>
        <input type="text" id="fname" name="fname"></input>
        <br></br>
        <label>Password:</label>
        <input type="text" id="lname" name="lname"></input>
        <br></br>
        <label>Email:</label>
        <input type="text" id="lname" name="lname"></input>
        <br></br>
        <input type="submit" value="Submit"></input>
    </form>

    
</div>
  
   };
  
   export default Signup;