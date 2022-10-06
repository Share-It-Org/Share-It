import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Homepage.css'

const ProfileBox = () => {
  return (
    <div id="profile-box">
      <Link to="/profile">Profile </Link>
    </div>
  )
}

export default ProfileBox