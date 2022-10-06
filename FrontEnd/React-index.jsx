import React from 'react';
import ReactDOM from 'react-dom';
import './react-style.css';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import UI from './components/Ui.jsx';
import ServerRequest from './src/types/ServerRequests.js';

const Testing = () => {
  return <div>If you can see this, react is working. Yay!</div>;
};

function App(){

  const [userDetails, setUserDetails] = React.useState({
    firstName:"", 
    lastName:"", 
    username:"", 
    password:"",
    isLoggedIn: false,
    isUser: true,
    userThings: [],
    searchedThings: []
  });

  function goToCreateUser(){
    setUserDetails((userDetails) => ({...userDetails,...{isUser: false}}));
  }

  function sendALoginRequest(event, username, password){
    event.preventDefault();

    ServerRequest.LoginUser(username, password)
      .then(data => {
        if(data.status === 200) {
          setUserDetails((userDetails) => ({
            ...userDetails,
            ...{isUser: true,
                isLoggedIn: true,
                username: username}
              }));
        }
      })
      .then()
  }

  function sendACreateUserRequest(event, username, password, email){
    event.preventDefault();

    ServerRequest.CreateUser(username, password, email)
      .then(data => {
        if(data.status === 200){
          setUserDetails((userDetails) => ({...userDetails,...{isUser: true, isLoggedIn: true, username: username}}));
        }
      })
    }

  function getUserDetails(username){
    ServerRequest.GetItems(username)
      .then(result => result.json())
      .then(data => {
        if(data){
          setUserDetails((userDetails) => ({...userDetails,...{userThings: data}}));
          console.log('userDetails', userDetails)
        };
      });
    } 
  
  if(userDetails.isUser === false && userDetails.isLoggedIn === false){          //They're not a user, do the signup screen.
    return <div id = 'screen'><Signup sendACreateUserRequest={sendACreateUserRequest}/></div>;
  }

  if(userDetails.isLoggedIn === false && userDetails.isUser === true){         //Not logged in, do the login screen.
    return <div id = 'screen'><Login sendALoginRequest={sendALoginRequest} goToCreateUser={goToCreateUser}/></div>;
  }

  if(userDetails.isLoggedIn === true && userDetails.isUser === true){          //They're logged in, do the main screen.
    if(!userDetails.username) getUserDetails(userDetails.username);
    return <div id = 'screen'><UI consoleLogForTesting={consoleLogForTesting} username={userDetails.username} userThings={userDetails.userThings} /></div>;
  }

};

//Render
ReactDOM.render(<App />, document.getElementById('root'));
