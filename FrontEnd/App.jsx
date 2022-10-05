import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Routes} from 'react-router-dom';
import Login from './routes/Login.jsx';
import Profile from './routes/Profile.jsx';
import Homepage from './routes/Homepage.jsx';


const App = () => {
  return (
    <>
    <p>"Hello"</p>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Homepage />} />
            <Route path='/profile' element={<Profile />} /> {/* How will we append the user's username to the end of this endpoint? */}
        </Routes>
    </>
  )
}

export default App;