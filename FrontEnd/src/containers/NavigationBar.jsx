import React from 'react'
import ProfileBox from '../components/ProfileBox.jsx'
import SearchBar from '../components/SearchBar.jsx'
import "../styles/NavigationBar.css"
import logo from '../images/SCycle.png';

const NavigationBar = () => {
  return (
    <div id="navigation-bar">
        <img id="navigation-logo" src={logo}/>
        <SearchBar />
        <ProfileBox />
    </div>
  )
}

export default NavigationBar