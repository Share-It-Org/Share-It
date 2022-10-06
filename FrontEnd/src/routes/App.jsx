import React from 'react'
// import ReactDOM from 'react-dom'
import {Route, Routes} from 'react-router-dom';
import Login from './Login.jsx';
import Profile from './Profile.jsx';
import Homepage from './Homepage.jsx';
import ItemView from './ItemView.jsx';


const App = () => {
  return ( <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home/" element={<Homepage />} />
            <Route path="/home/:id" element={<ItemView />} />
            <Route path="/profile" element={<Profile />} />
      </Routes>
  )
}

export default App;
