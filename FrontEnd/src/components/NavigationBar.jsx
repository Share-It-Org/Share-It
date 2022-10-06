import React from 'react'
import ProfileBox from './ProfileBox.jsx'
import SearchBar from './SearchBar.jsx'
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