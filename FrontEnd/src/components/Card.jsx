import React from 'react'

const Card = ({details, toggleModal}) => {
  return (
    <input type="button" style={{width: '300px', height: '125px'}} value={details.name} onClick={(e => {toggleModal(e, details)})}/> 
  )
}

export default Card