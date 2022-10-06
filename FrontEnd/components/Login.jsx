//setup stuff
//import everything, set up default variables, etc etc etc.
import React from 'react';
import Images from '../Images/SCycle.png';
function Login({ sendALoginRequest, goToCreateUser }){
    let username = '';
    let password = '';

    return <div id='loginBox' className='centerMe'>
        <h1>Stuff Library</h1>
        <img id="logo" src={Images}/>
        <h2>Welcome</h2>
        <h3>login</h3>
        <form onSubmit={(event) => sendALoginRequest(event, username, password)}>
            {/* <label>Username:</label> */}
            <input className='inputField' type="text" id="username" name="username" placeholder="username" onChange={(e) => username = e.target.value}></input>
            <br></br>
            {/* <label >Password:</label> */}
            <input clasName='inputField' type="password" id="password" name="password" placeholder="password" onChange={(e) => password = e.target.value}></input>
            <br></br>
          <input className="btn" type="submit" value="Submit"></input>
        </form>

        <button className="btn" onClick={goToCreateUser}>Create A New Account</button>
        
    </div>
};
  
   export default Login;