import React from 'react'
import ProfileBox from '../components/ProfileBox.jsx'
import SearchBar from '../components/SearchBar.jsx'
import "../styles/NavigationBar.css"

const NavigationBar = () => {
  return (
    <div id="navigation-bar">
        <div>Put Logo Here!</div>
        <SearchBar />
        <ProfileBox />
    </div>
  )
}

export default NavigationBar