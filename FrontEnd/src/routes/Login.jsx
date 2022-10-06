import React from 'react'
import Images from '../images/SCycle.png';
import '../styles/Login.css'

const Login = ({sendALoginRequest, goToCreateUser}) => {
  return (
    <div id='loginBox' className='centerMe'>
        <h1>Stuff Library</h1>
        <img src={Images}/>
        <h2>Welcome</h2>
        <h3>login</h3>
        <form onSubmit={(event) => sendALoginRequest(event, username, password)}>
            {/* <label>Username:</label> */}
            <input type="text" id="username" name="username" placeholder="username" onChange={(e) => username = e.target.value}></input>
            {/* <label >Password:</label> */}
            <input type="password" id="password" name="password" placeholder="password" onChange={(e) => password = e.target.value}></input>
          <input className="btn" type="submit" value="Submit"></input>
        </form>

        <button className="btn" onClick={goToCreateUser}>Create A New Account</button>
        
    </div>
  )
}

export default Login