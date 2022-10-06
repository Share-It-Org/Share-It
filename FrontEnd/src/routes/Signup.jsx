//setup stuff
//import everything, set up default variables, etc etc etc.
import React, {useState} from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import ServerRequests from '../types/ServerRequests';
import '../styles/Signup.css';

const Signup = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [formData, setFormData] = useState({
      username: '',
      password: '',
      email: '',
      street_address: '',
      city: '',
      state: '',
      zip: '',
    });

    const handleChange = (e, property) => {
      if (property === 'zip') { // this is to coerece the zip code inputted as a string, into an integer 
          let updatedValue = {};
      updatedValue = {[property]: parseInt(e.target.value)};
      setFormData(formData => ({
          ...formData,
          ...updatedValue
      }))}
      else {
          let updatedValue = {};
          updatedValue = {[property]: e.target.value};
          setFormData(formData => ({
              ...formData,
              ...updatedValue
          }))}
      }

    const requestCreateUser = () => {
        console.log(formData);
        ServerRequests.CreateUser(formData)
        .then(data => {
          if(data.status === 200){
            console.log('passed');
            location.state = {isLoggedIn: true};
            navigate('/home');
          }
        })
      }

    return (
    <div id='signUpBox' className='centerMe'>
        <h2>create an account</h2>
        <input type="text" id="firstName" name="firstName" placeholder="name" onChange={(e) => formData.username = e.target.value}></input>
        <br></br>
        <input type="password" id="password" name="password" placeholder="password" onChange={(e) => formData.password= e.target.value}></input>
        <br></br>
        <input type="text" id="email" name="email" placeholder="e-mail" onChange={(e) => formData.email = e.target.value}></input>
        <br></br>
        <div id="signup__address-box">
          <h3>address info</h3>
          <div className="inputContainer" > 
                  <input
                  type="text"
                  name="street_address"
                  placeholder="Address"
                  defaultValue={formData.street_address}
                  onChange={(e) => handleChange(e, "street_address")}
                  />
              </div>
              <div className="inputContainer" > 
                  <input
                  type="text"
                  name="city"
                  placeholder="City"
                  defaultValue={formData.city}
                  onChange={(e) => handleChange(e, "city")}
              />
              </div>
              <div className="inputContainer" > 
              <input
              type="text"
              name="state"
              placeholder="State"
              defaultValue={formData.state}
              onChange={(e) => handleChange(e, "state")}
              />
              </div>
              
              <div className="inputContainer">
                  <input
                  type="text"
                  name="zip"
                  placeholder="Zip Code"
                  defaultValue={formData.zip}
                  onChange={(e) => handleChange(e, "zip")}
                  />
              </div>
          </div>
        <input className="btn" type="submit" value="Submit" onClick={requestCreateUser}></input>
        </div>
    )
};
  
export default Signup;